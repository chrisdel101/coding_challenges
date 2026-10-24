class Node {
  index
  originalValue
  usedSpan // number
  isTerminalNode //boolean
  reversedCheck
  constructor({
    index,
    originalValue,
    usedSpan,
    isTerminalNode = false,
    reversedCheck = false,
  }) {
    this.index = index
    this.originalValue = originalValue
    this.usedSpan = usedSpan
    this.isTerminalNode = isTerminalNode
    this.reversedCheck = reversedCheck
  }
}

function solve(game) {
  const nodeStack = []
  // convert to numbers
  const digits = Array.from(game, Number)
  let i = 0
  const values = []
  let currShortestValue = undefined
  do {
    const remainingTotalLen = digits.length - i

    // if we backtracked indexes will match nodes in stack
    let node
    // this means backtracking
    if (nodeStack[0]?.index === i) {
      node = nodeStack.shift()
      // check span is not already at min - make sure to check
      if (!node.reversedCheck) {
        if (node.usedSpan - 1 > 0) {
          node.usedSpan -= 1
          node.isTerminalNode =
            digits[i + node.usedSpan] !== undefined ? false : true
        } else {
          if (!nodeStack[0]) {
            console.error('Hit empty nodeStack')
          } else {
            // if it cannot go lower or go back to next
            i = nodeStack[0]?.index
          }
          continue
        }
      } else {
        if (node.usedSpan + 1 <= node.originalValue) {
          node.usedSpan += 1
          node.isTerminalNode =
            digits[i + node.usedSpan] !== undefined ? false : true
        } else {
          if (!nodeStack[0]) {
            console.error('Hit empty nodeStack')
          } else {
            // if it cannot go lower or go back to next
            i = nodeStack[0]?.index
          }
          continue
        }
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

    for (let j = node.usedSpan; j > 0; j--) {
      const inBoundsSpanEnd = digits[i + node.usedSpan]
      if (
        node.isTerminalNode &&
        node.reversedCheck &&
        node.usedSpan !== remainingTotalLen
      )
        break
      if (node.isTerminalNode) {
        // terminal node original must be exact equal to remaining
        if (node.usedSpan !== remainingTotalLen) {
          // node.reversedCheck = true
          // node.usedSpan = 1
          // set to backtrack
          break
          // terminal node finishes run
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
            // values.splice(0, values.length)
            values.push(runValues)
          } else if (runValues.length === currShortestValue) {
            values.push(runValues)
          }
          // backtrack to try other paths
          i = nodeStack[0]?.index
          !i && console.error('node stack is empty')
          break
        }
      } else {
        //non terminal and non first node
        if (inBoundsSpanEnd === undefined) {
          throw new Error('indexed past end of array out of bounds')
        }
        // move to next node move - current minus next > 0
        if (inBoundsSpanEnd - node.usedSpan > 0) {
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
              console.error('Node stack empty')
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
    // terminal and empty stack - first/only node
    if (node.isTerminalNode && node.reversedCheck) {
      for (let j = node.usedSpan; j <= node.originalValue; j++) {
        const nextIncerementValue = digits[i + j]
        // means last index cannot use
        if (!nextIncerementValue) {
          // backtrack
          i = nodeStack[0]?.index
          break
        }
        // check subtraction leaves next above zero
        if (nextIncerementValue - node.usedSpan > 0) {
          // accept current node value - update index
          i = i + node.usedSpan // update to new i
          // push to stacks top
          node.isTerminalNode = false
          nodeStack.unshift(node)
          break
        } 
      }
    }
  } while (nodeStack.length)
  return values
}
// console.log(solve('38088198647805'))
// console.log(solve('51416573385334'))
// console.log(solve('4621'))
// console.log(solve('65042485'))
console.log(solve('6'))
// console.log(solve('6348'))
// console.log(solve('3222'))
// console.log(solve('2177510183994154'))
// [4,2,3,5]
