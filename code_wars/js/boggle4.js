function checkWord(board, word) {
  const wordArr = word.split('')
  const pathStack = []
  let matchString = ''
  const neighbourMap = mapAllNeighourNodes(board)
  const coordsHashTable = board.reduce((acc, currArr, i) => {
    currArr.map((value, j) => {
      if (acc[value]) acc[value].push([i, j])
      else acc[value] = [[i, j]]
    })
    return acc
  }, {})
  // first item not in the list - we are done
  if (!coordsHashTable[wordArr[0]]) return false
  const firstLetterStack = [...(coordsHashTable[wordArr[0]] || [])]
  let coordsHashTableCopy = structuredClone(coordsHashTable)
  let i = 0
  while (matchString !== word) {
    let currentLetterCoord
    if (pathStack.length) {
      // top of stack is current
      currentLetterCoord = Object.values(pathStack[0])[0]
    } else {
      // add first item to the stack 
      currentLetterCoord = firstLetterStack?.[0]
      pathStack.unshift({ [wordArr[0]]: currentLetterCoord })
      const usedCoordsItemKey = Object.keys(pathStack[0])[0]
      const hashItemArrIndex = coordsHashTableCopy[usedCoordsItemKey].findIndex(
        (arr) => {
          return `${arr}` === `${currentLetterCoord}`
        },
      )
      hashItemArrIndex > -1 &&
        console.log(
          'Remove used path as marked',
          usedCoordsItemKey,
          `${currentLetterCoord}`,
        )
      // remove failed coords from hash arr
      hashItemArrIndex > -1 &&
        coordsHashTableCopy[usedCoordsItemKey].splice(hashItemArrIndex, 1)
      matchString = wordArr[0]
      // increment to find next letter in word
      i++
      continue
    }

    const nextLetterToFind = wordArr[i]

    const nextLetterHashCoordsArr = coordsHashTableCopy[nextLetterToFind]
    if (!nextLetterHashCoordsArr) {
      console.log(nextLetterToFind, 'not found. letter not on board')
      return false
    }
    const nextLetterHashCoords = clockWiseMatchCellToLetterCoordsArr({
      currentLetterCoord,
      letterCoordsArr: nextLetterHashCoordsArr    })
    // make sure found node not in stack - so we cannot visit the prev node
    let nextLetterNeighbourCoords
    if(!nextLetterHashCoords){
      const nextLetterNeighbourMapCoordsArr = neighbourMap[JSON.stringify(currentLetterCoord)]
      const coordsToCheck = clockWiseMatchCellToLetterByNeighbours({
        currentLetterCoord,
        nextLetterToFind,
        unusedNeighboursArr: nextLetterNeighbourMapCoordsArr,
        board,
      })
      // check it's not already in the stach
      const isInstack = pathStack.some(itemObj => {
        return `${itemObj[nextLetterToFind]}` === `${coordsToCheck}`
      })
      console.log(isInstack)
      !isInstack ? (nextLetterNeighbourCoords = coordsToCheck) : undefined
      console.log('neighbour coord check value', nextLetterNeighbourCoords)
    }
    
    console.log('nextLetterToFind', nextLetterToFind)
    console.log(
      'current coords',
      currentLetterCoord,
      Object.keys(pathStack[0])[0],
    )
    const coordsToUse = nextLetterHashCoords ?? nextLetterNeighbourCoords
    if (coordsToUse) {
      // !nextLetterHashCoords && console.log("Using Next neighbour")
      if(!nextLetterHashCoords){
        console.log("Using Next neighbour")
      }
      pathStack.unshift({ [nextLetterToFind]: coordsToUse })
      console.log(
        'found and added to stack',
        nextLetterToFind,
        'at',
        coordsToUse,
      )
      matchString += nextLetterToFind
      // remove from hash here too
      // const usedCoordsItem = Object.values(pathStack[0])[0]
      const usedCoordsItemKey = Object.keys(pathStack[0])[0]
      const hashItemArrIndex = coordsHashTableCopy[usedCoordsItemKey].findIndex(
        (arr) => {
          return `${arr}` === `${coordsToUse}`
        },
      )
      hashItemArrIndex > -1 &&
        console.log(
          'Remove used path as marked',
          usedCoordsItemKey,
          `${coordsToUse}`,
        )
      // remove failed coords from hash arr and
      hashItemArrIndex > -1 &&
        coordsHashTableCopy[usedCoordsItemKey].splice(hashItemArrIndex, 1)
      // remove failed coords starting nodes visited list
      const neighbourMapIndex = neighbourMap[JSON.stringify(currentLetterCoord)]?.findIndex(
        (arr) => {
          return `${arr}` === `${coordsToUse}`
        },
      )
       neighbourMapIndex > -1 &&
        console.log(
          'Remove neighbour - ',
          'coord key:', currentLetterCoord,
          'From letter', board[currentLetterCoord[0]][currentLetterCoord[1]], 
          'removing coords from list:', neighbourMap[JSON.stringify(currentLetterCoord)][neighbourMapIndex],
        )
      // remove neighbour as access from current node
      neighbourMapIndex > -1 &&
        neighbourMap[JSON.stringify(currentLetterCoord)]?.splice(neighbourMapIndex, 1)
      i++
    } else {
      console.log('Not found', nextLetterToFind)
      const poppedItem = pathStack.shift()
      matchString = matchString.slice(0, -1)
      console.log('Popped prev', Object.keys(poppedItem)[0])
      // empty the stacked - were on first letter
      if (!pathStack.length) {
        // pop top first letter stack
        firstLetterStack.shift()
        if (!firstLetterStack.length) {
          return false
        }
        // reset hashTable
        coordsHashTableCopy = structuredClone(coordsHashTable)
        i = 0
        continue
      }
      // coords failed - to remove from hash arr
      const failedCoords = Object.values(poppedItem)[0]
      const poppedItemKey = Object.keys(poppedItem)[0]
      // find index of failedCoords in the hash
      const hashItemArrIndex = coordsHashTableCopy[poppedItemKey].findIndex(
        (arr) => {
          return `${arr}` === `${failedCoords}`
        },
      )
      // remove failed coords from hash arr
      hashItemArrIndex > 0 &&
        coordsHashTableCopy[poppedItemKey].splice(hashItemArrIndex, 1)
      if (!coordsHashTableCopy[poppedItemKey]) {
        delete coordsHashTableCopy[poppedItemKey]
        // i--
      }
      i > 1 && i--
    }
  }
  return true
}
function mapAllNeighourNodes(board) {
  if (!board) return
  const bottomRightStartCoords = (i, j) => ([
    [i + 1, j + 1], //bottom right
    [i + 1, j],
    [i + 1, j - 1],
    [i, j - 1],
    [i -1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j + 1],
  ])
  const neighbourMap = {}
  for (let k = 0; k < board.length; k++) {
    for (let m = 0; m < board[k].length; m++) {
      const coordIndexes = bottomRightStartCoords(k, m)
      neighbourMap[JSON.stringify([k,m])] = []
      for (let n = 0; n < coordIndexes.length; n++) {
        const [i, j] = coordIndexes[n]
        const neighbour = board[i]?.[j]
        // console.log(neighbour)
        neighbour && neighbourMap[JSON.stringify([k,m])].push([i,j])
      }
    }
  }
  return neighbourMap
}
// check clockwise cells and check if coords are in letterCoordsArr - means matches letter
function clockWiseMatchCellToLetterCoordsArr({
  currentLetterCoord,
  letterCoordsArr}) {
  if (!letterCoordsArr) return
  const [i, j] = currentLetterCoord
  const bottomRightStartCoords = [
    [i + 1, j + 1], //bottom right
    [i, j + 1],
    [i - 1, j + 1],
    [i - 1, j],
    [i - 1, j - 1],
    [i, j - 1],
    [i + 1, j - 1],
    [i + 1, j],
  ]
  for (let k = 0; k < bottomRightStartCoords.length; k++) {
    const coordToCheck = bottomRightStartCoords[k]
    // check that node has been visited not been in general
    const coordArrIndex = letterCoordsArr.find(
      (letterCoord) => `${letterCoord}` === `${coordToCheck}`,
    )
    if (coordArrIndex) return coordArrIndex
  }
}
function clockWiseMatchCellToLetterByNeighbours({
  currentLetterCoord ,board, nextLetterToFind, unusedNeighboursArr }) {
  if (!currentLetterCoord || !board || !nextLetterToFind || !unusedNeighboursArr) return
  const [i, j] = currentLetterCoord
  const bottomRightStartCoords = [
    [i + 1, j + 1], //bottom right
    [i, j + 1],
    [i - 1, j + 1],
    [i - 1, j],
    [i - 1, j - 1],
    [i, j - 1],
    [i + 1, j - 1],
    [i + 1, j],
  ]
  for (let k = 0; k < bottomRightStartCoords.length; k++) {
    const [x,y] = bottomRightStartCoords[k]
    // check if actual letter matches cell
    const isLetter = board[x]?.[y] === nextLetterToFind
    // if found check this is unvisited neighbour
    const isUnused = isLetter && unusedNeighboursArr.includes([x,y])
    if (isUnused) return [x,y]
  }
}
function Coord(i, j, value) {
  this.i = i
  this.j = j
  this.value = value
  return this
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
// console.log(checkWord(testBoard1, 'BAILER'));
// console.log(checkWord(testBoard3, 'CEREAL'));
console.log(checkWord(testBoard4, 'PARAPARAS'))
// console.log(checkWord(testBoard5, 'VNTTB'))
