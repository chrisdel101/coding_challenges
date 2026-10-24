class Node {
  index
  originalValue
  usedSpan // number
  isTerminalNode //boolean
  constructor({ index, originalValue, usedSpan, isTerminalNode = false }) {
    this.index = index
    this.originalValue = originalValue
    this.usedSpan = usedSpan
    this.isTerminalNode = isTerminalNode
  }
}

function solve(game) {
  const nodeStack = []
  // convert to numbers
  let i = 0
  const values = []
  const digits = Array.from(game, Number)
  if (!digits?.length) return [[]]
  let currShortestValue = undefined
  do {
    const remainingTotalLen = digits.length - i

    // if we backtracked indexes will match nodes in stack
    let node
    // this means backtracking
    if (nodeStack[0]?.index === i) {
      node = nodeStack.shift()
      // check span is not already at min - make sure to check
      if (node.usedSpan - 1 > 0) {
        node.usedSpan -= 1
        node.isTerminalNode =
          digits[i + node.usedSpan] !== undefined ? false : true
      } else {
        if (!nodeStack[0]) {
          // console.error('Hit empty nodeStack')
        } else {
          // if it cannot go lower or go back to next
          i = nodeStack[0]?.index
        }
        continue
      }
    } else {
      node = new Node({
        index: i,
        originalValue: digits[i],
      })
      // first and only start at 1 - else subtract prev to get current span - skip on first item
      node.usedSpan = nodeStack[0]
        ? digits[i] - nodeStack[0].usedSpan
        : digits[i]
      // if value > remaining length it's last node or out of bounds
      node.isTerminalNode =
        digits[i + node.usedSpan] !== undefined ? false : true
    }

    jLoop: for (let j = node.usedSpan; j > 0; j--) {
      // undefined if on last item
      const nonTerminalEndValue = digits[i + node.usedSpan]
      if (node.isTerminalNode) {
        // not EQ terminal node means span is GT remaining len
        if (node.usedSpan !== remainingTotalLen) {
          // get length btw current and last value item
          const terminalLengthSpan = remainingTotalLen - 1
          // get value at end of span AKA last value
          const lastValueFrozen = digits[i + terminalLengthSpan]
          // lastValueFrozen == undefined &&
          //   console.error('lastValueFrozen is missing')
          if (terminalLengthSpan === 0) {
            // this node backtrack
            i = nodeStack[0]?.index
            break
          }
          // decrement to find possible paths
          for (let k = terminalLengthSpan; k > 0; k--) {
            let movingLastValue = digits[i + k]
            // try span minus last value GT zero
            if (movingLastValue - k > 0) {
              // reset node to new span
              node.usedSpan = k
              // set to next node
              i = i + node.usedSpan
              nodeStack.unshift(node)
              break jLoop
            }
          }
        } else {
          nodeStack.unshift(node)
          // reverse arr to get str order
          const runValues = nodeStack.toReversed().map((node) => node.usedSpan)
          // remove just added
          nodeStack.shift()
          // if shortest not set or new shortest is found
          if (!currShortestValue) {
            currShortestValue = runValues.length
          }
          // new shortest found
          if (runValues.length < currShortestValue) {
            currShortestValue = runValues.length
            // empty const values arr
            values.splice(0, values.length)
            values.unshift(runValues)
          } else if (runValues.length === currShortestValue) {
            values.unshift(runValues)
          }
          // backtrack to try other paths
          i = nodeStack[0]?.index
          // i === undefined && console.error('node stack is empty')
          break
        }
      } else {
        //non terminal and non first node
        if (nonTerminalEndValue === undefined) {
          throw new Error('indexed past end of array out of bounds')
        }
        // move to next node move - current minus next > 0
        if (nonTerminalEndValue - node.usedSpan > 0) {
          // check value not more than currShortestValue - else no point to compute
          if (currShortestValue && nodeStack.length + 1 > currShortestValue) {
            // backtrack
            i = nodeStack[0].index ?? 0
            break
          }
          // accept current node value - update index to next span
          i = i + node.usedSpan // update to new i
          // push to stacks top
          nodeStack.unshift(node)
          break
        } else {
          // decrement span and retry
          if (node.usedSpan - 1 > 0) {
            node.usedSpan -= 1
          } else {
            if (!nodeStack[0]) {
              // console.error('Node stack empty')
            } else {
              // span is already at min - cannot go lower
              // backtrack
              i = nodeStack[0].index
            }
            break
          }
        }
      }
    }
  } while (nodeStack.length)
  return values
}
// console.log(solve('38088198647805'))
// console.log(solve('51416573385334'))
// // console.log(solve('4621'))
// // console.log(solve('65042485'))
// // console.log(solve('6'))
// console.log(solve('6348'))
// console.log(solve('9555267224559216'))
// console.log(solve('2177510183994154'))
console.log(solve(''))
// [4,2,3,5]
