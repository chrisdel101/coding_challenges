function checkWord(board, word) {
  const wordArr = word.split('')
  const coordsStack = []
  let matchString = ''
  const coordsHashTable = board.reduce((acc, currArr, i) => {
    currArr.map((value, j) => {
      if (acc[value]) acc[value].push([j, i])
      else acc[value] = [[j, i]]
    })
    return acc
  }, {})
  // fisrt item not in the list
  if(!coordsHashTable[wordArr[0]]) return false
  const firstLetterStack = [...(coordsHashTable[wordArr[0]] || [])]
  let coordsHashTableCopy = structuredClone(coordsHashTable)
  const directNodesChecked = {}
  let i = 0
  while (matchString !== word) {
    let currentLetterCoord
    if (coordsStack.length) {
      // top of stack is current
      currentLetterCoord = Object.values(coordsStack[0])[0]
    } else {
      // add first item to the stack if found
      currentLetterCoord = firstLetterStack?.[0]
      coordsStack.unshift({ [wordArr[0]]: currentLetterCoord })
      const usedCoordsItemKey = Object.keys(coordsStack[0])[0]
       const hashItemArrIndex = coordsHashTableCopy[usedCoordsItemKey].findIndex(
        (arr) => {
          return `${arr}` === `${currentLetterCoord}`
        },
      )
      hashItemArrIndex > -1 && console.log('Remove used path as marked', usedCoordsItemKey, `${currentLetterCoord}`)
      // remove failed coords from hash arr
      hashItemArrIndex > -1  && coordsHashTableCopy[usedCoordsItemKey].splice(hashItemArrIndex, 1)
      matchString = wordArr[0]
      // increment to find next letter in word
      i++
      continue
    }

    const nextLetterToFind = wordArr[i]

    const letterCoordsArr = coordsHashTableCopy[nextLetterToFind]
    if (!letterCoordsArr) {
      console.log(nextLetterToFind, 'not found')
      return false
    }
    const letterCoords = clockWiseCoordSearch({
      currentLetterCoord,
      letterToFind: nextLetterToFind,
      letterCoordsArr,
    })
    console.log('nextLetterToFind', nextLetterToFind)
    console.log('current coords', currentLetterCoord, Object.keys(coordsStack[0])[0])
    if (letterCoords) {
      // give node all possible options for neighbour
      if(!directNodesChecked[JSON.stringify(currentLetterCoord)]){
      console.log('Add all', nextLetterToFind, 'to', Object.keys(coordsStack[0])[0], 'at', currentLetterCoord)
      directNodesChecked[JSON.stringify(currentLetterCoord)] = coordsHashTable[nextLetterToFind]
    }
      coordsStack.unshift({ [nextLetterToFind]: letterCoords })
      console.log('found and added to stack', nextLetterToFind, 'at', letterCoords)
      matchString += nextLetterToFind
      directNodesChecked
      // remove from hash here too
      // coords failed - to remove from hash arr
      const usedCoordsItem = Object.values(coordsStack[0])
      const usedCoordsItemKey = Object.keys(coordsStack[0])[0]
      const hashItemArrIndex = coordsHashTableCopy[usedCoordsItemKey].findIndex(
        (arr) => {
          return `${arr}` === `${usedCoordsItem}`
        },
      )
      hashItemArrIndex > -1 && console.log('Remove used path as marked', usedCoordsItemKey, `${usedCoordsItem}`)
      // remove failed coords from hash arr and 
      hashItemArrIndex > -1  && coordsHashTableCopy[usedCoordsItemKey].splice(hashItemArrIndex, 1)
      // remove failed coords starting nodes visited list
      hashItemArrIndex > -1  && directNodesChecked[JSON.stringify(currentLetterCoord)].splice(hashItemArrIndex, 1)
      i++
    } else {
      console.log('Not found', nextLetterToFind)
      const poppedItem = coordsStack.shift()
      matchString = matchString.slice(0,-1)
      console.log('Popped prev', Object.keys(poppedItem)[0])
      // empty the stacked - were on first letter
      if (!coordsStack.length) {
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
function clockWiseCoordSearch({
  currentLetterCoord,
  letterToFind,
  letterCoordsArr,
}) {
  if (!letterToFind || !letterCoordsArr) return
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
    const coordArrIndex = letterCoordsArr.find(
      (letterCoord) => `${letterCoord}` === `${coordToCheck}`,
    )
    if (coordArrIndex) return coordArrIndex
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

// console.log(checkWord(testBoard2, 'T'))
// console.log(checkWord(testBoard3, 'BAILER') === true)
// console.log(checkWord(testBoard3, 'EARS') === false);
// console.log(checkWord(testBoard3, 'RSCAREIOYBAILNEA') === true);
// console.log(checkWord(testBoard1, 'BAILER'));
// console.log(checkWord(testBoard1, 'CEREAL'));
console.log(checkWord(testBoard4, 'PARAPARAS'));
