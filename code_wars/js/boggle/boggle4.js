function checkWord(board, word) {
  const wordArr = word.split('')
  const pathStack = []
  let matchString
  const neighbourVisitedMap = mapAllNeighourNodes(board)
  const neighbourVisitedMapCopy = structuredClone(neighbourVisitedMap)
  const pathCoordsHashTable = board.reduce((acc, currArr, i) => {
    currArr.map((value, j) => {
      if (acc[value]) acc[value].push([i, j])
      else acc[value] = [[i, j]]
    })
    return acc
  }, {})
  let pathCoordsHashTableCopy = structuredClone(pathCoordsHashTable)
  // keep track of first nodes 
  const firstLetterCoordInstances = pathCoordsHashTable[wordArr[0]] && [...pathCoordsHashTable[wordArr[0]]]
  let i = 0
  while (!!(firstLetterCoordInstances?.length && matchString !== word)) {
    let currentLetterCoord
    if (pathStack.length) {
      // top of stack is current coord
      currentLetterCoord = Object.values(pathStack[0])[0]
    } else {
      // add first item to the stack
      currentLetterCoord = firstLetterCoordInstances?.[0]
      pathStack.unshift({ [wordArr[0]]: currentLetterCoord })
      const usedCoordsItemKey = Object.keys(pathStack[0])[0]
      const hashItemArrIndex = pathCoordsHashTableCopy[usedCoordsItemKey].findIndex(
        (arr) => {
          return `${arr}` === `${currentLetterCoord}`
        },
      )
      // remove path from hash arr after used
      hashItemArrIndex > -1 &&
        pathCoordsHashTableCopy[usedCoordsItemKey].splice(hashItemArrIndex, 1)
      matchString = wordArr[0]
      // increment to find next letter
      i++
      continue
    }
    const nextLetterToFind = wordArr[i]
    // coords of all nextLetterToFind instances on board
    const nextLetterHashCoordsArr = pathCoordsHashTableCopy[nextLetterToFind]
    // check for possible path to letter
    const nextLetterHashCoords = clockWiseMatchCellToLetterCoordsArr({
      currentLetterCoord,
      letterCoordsArr: nextLetterHashCoordsArr,
    })
    // if no direct path check neighbour nodes
    let nextLetterNeighbourCoords
    if (!nextLetterHashCoords) {
      const nextLetterNeighbourMapCoordsArr =
        neighbourVisitedMapCopy[JSON.stringify(currentLetterCoord)]
      const coordsArrToCheck = clockWiseMatchCellToLetterByNeighbours({
        currentLetterCoord,
        nextLetterToFind,
        unusedNeighboursArr: nextLetterNeighbourMapCoordsArr,
        board,
      })
      // make sure found node not in stack - so we cannot visit the prev node
     nextLetterNeighbourCoords = coordsArrToCheck.map((coord) => {
        // check it's not already in the stack
        const isInstack = pathStack.some((itemObj) => {
          return `${itemObj[nextLetterToFind]}` === `${coord}`
        })
        return !isInstack ? coord : undefined 
      })?.filter(coord => !!coord)?.[0]
    }
    // try path nodes then neighbour nodes
    const coordsToUse = nextLetterHashCoords ?? nextLetterNeighbourCoords
    if (coordsToUse) {
      pathStack.unshift({ [nextLetterToFind]: coordsToUse })
      matchString += nextLetterToFind
      const usedCoordsItemKey = Object.keys(pathStack[0])[0]
      // remove from path hash here too
      const hashItemArrIndex = pathCoordsHashTableCopy[usedCoordsItemKey].findIndex(
        (arr) => {
          return `${arr}` === `${coordsToUse}`
        },
      )
      // remove visited coords from path hash
      hashItemArrIndex > -1 &&
        pathCoordsHashTableCopy[usedCoordsItemKey].splice(hashItemArrIndex, 1)
      // remove visited neighour nodesd from the map
      const neighbourMapIndex = neighbourVisitedMapCopy[
        JSON.stringify(currentLetterCoord)
      ]?.findIndex((arr) => {
        return `${arr}` === `${coordsToUse}`
      })
      // remove neighbour from map as visited
      neighbourMapIndex > -1 &&
        neighbourVisitedMapCopy[JSON.stringify(currentLetterCoord)]?.splice(
          neighbourMapIndex,
          1,
        )
      i++
    } else {
      // pop off stack - path is invalid - backtrack 
      const poppedItem = pathStack.shift()
      matchString = matchString.slice(0, -1)
      // reset visited neighbour node map 
      neighbourVisitedMapCopy[JSON.stringify(currentLetterCoord)] =
        structuredClone(neighbourVisitedMap[JSON.stringify(currentLetterCoord)])
      // empty the stacked - were on first letter
      if (!pathStack.length) {
        // get top item from firstLetterCoordInstances stack
        firstLetterCoordInstances.shift()
        if (!firstLetterCoordInstances.length) {
          continue
        } 
        // reset hashTable
        pathCoordsHashTableCopy = structuredClone(pathCoordsHashTable)
        i = 0
        continue
      }
      // remove 
      const failedCoords = Object.values(poppedItem)[0]
      const poppedItemKey = Object.keys(poppedItem)[0]
      // find index of failedCoords in the hash
      const hashItemArrIndex = pathCoordsHashTableCopy[poppedItemKey].findIndex(
        (arr) => {
          return `${arr}` === `${failedCoords}`
        },
      )
      // remove failed coords from hash arr
      hashItemArrIndex > 0 &&
        pathCoordsHashTableCopy[poppedItemKey].splice(hashItemArrIndex, 1)
      if (!pathCoordsHashTableCopy[poppedItemKey]) {
        delete pathCoordsHashTableCopy[poppedItemKey]
      }
      i > 1 && i--
    }
  }
  return matchString === word
}
// all 8 neighbour coords clockwise from bottom right
function getCoordsFromBottomRight(i, j) {
  return [
    [i + 1, j + 1], //bottom right
    [i + 1, j],
    [i + 1, j - 1],
    [i, j - 1],
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j + 1],
  ]
}
function mapAllNeighourNodes(board) {
  const neighbourMap = {}
  for (let k = 0; k < board.length; k++) {
    for (let m = 0; m < board[k].length; m++) {
      const coordIndexes = getCoordsFromBottomRight(k, m)
      neighbourMap[JSON.stringify([k, m])] = []
      for (let n = 0; n < coordIndexes.length; n++) {
        const [i, j] = coordIndexes[n]
        const neighbour = board[i]?.[j]
        neighbour && neighbourMap[JSON.stringify([k, m])].push([i, j])
      }
    }
  }
  return neighbourMap
}
// check clockwise cells and check if coords are in letterCoordsArr - means matches letter
function clockWiseMatchCellToLetterCoordsArr({
  currentLetterCoord,
  letterCoordsArr,
}) {
  const [i, j] = currentLetterCoord
  const bottomRightStartCoords = getCoordsFromBottomRight(i, j)
  for (let k = 0; k < bottomRightStartCoords.length; k++) {
    const coordToCheck = bottomRightStartCoords[k]
    const coordArrIndex = letterCoordsArr?.find(
      (letterCoord) => `${letterCoord}` === `${coordToCheck}`,
    )
    if (coordArrIndex) return coordArrIndex
  }
}
function clockWiseMatchCellToLetterByNeighbours({
  currentLetterCoord,
  board,
  nextLetterToFind,
  unusedNeighboursArr,
}) {
  const [i, j] = currentLetterCoord
  const bottomRightStartCoords = getCoordsFromBottomRight(i, j)
  const possbleCoords = []
  for (let k = 0; k < bottomRightStartCoords.length; k++) {
    const [x, y] = bottomRightStartCoords[k]
    // check if actual letter matches cell
    const isLetter = board[x]?.[y] === nextLetterToFind
    // if found check this is unvisited neighbour
    const isUnused =
      isLetter &&
      unusedNeighboursArr.some((coord) => `${coord}` === `${[x, y]}`)
    if (isUnused) possbleCoords.push([x, y])
  }
  return possbleCoords
}

var tammy = [
  ['T', 'A', 'M', 'D', 'A'],
  ['A', 'A', 'I', 'N', 'N'],
  ['M', 'M', 'L', 'C', 'E'],
  ['I', 'A', 'U', 'L', 'G'],
  ['A', 'M', 'I', 'N', 'A'],
]
var testBoard1 = [
  ['S', 'A', 'R', 'A'],
  ['A', 'A', 'E', 'C'],
  ['R', 'A', 'R', 'S'],
  ['B', 'Y', 'O', 'S'],
]

const testBoard2 = [
  ['T', 'T', 'M', 'D', 'A'],
  ['G', 'Y', 'I', 'N', 'N'],
  ['P', 'A', 'L', 'C', 'E'],
  ['I', 'A', 'U', 'L', 'G'],
  ['A', 'M', 'I', 'N', 'A'],
]
var testBoard3 = [
  ['E', 'A', 'R', 'A'],
  ['N', 'L', 'E', 'C'],
  ['I', 'A', 'I', 'S'],
  ['B', 'Y', 'O', 'R'],
]
var testBoard4 = [
  ['N', 'B', 'R', 'A'],
  ['C', 'R', 'P', 'A'],
  ['L', 'A', 'A', 'P'],
  ['S', 'O', 'A', 'A'],
]
var testBoard5 = [
  ['B', 'T', 'T', 'T'],
  ['L', 'M', 'N', 'X'],
  ['Y', 'T', 'T', 'V'],
]

// console.log(checkWord(testBoard2, 'T'))
// console.log(checkWord(testBoard3, 'BAILER') === true)
// console.log(checkWord(testBoard3, 'EARS') === false);
// console.log(checkWord(testBoard3, 'RSCAREIOYBAILNEA') === true);
// console.log(checkWord(testBoard3, 'BAILER'));
console.log(checkWord(testBoard3, 'CEREAL'));
// console.log(checkWord(testBoard4, 'PARAPARAS'))
// console.log(checkWord(testBoard5, 'VNTTB'))
