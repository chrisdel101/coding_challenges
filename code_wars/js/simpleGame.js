class Node {
  index
  originalValue
  usedSpan
  constructor({ index, originalValue, usedSpan }) {
    this.index = index
    this.originalValue = originalValue
    this.usedSpan = usedSpan
  }
}

function solve(game) {
  const nodeStack = []
  // convert to numbers
  const digits = Array.from(game, Number)
  let i = 0
  const values = []
  let currentShortLen = undefined
  let backtracking = false
  do {
    // if we backtracked indexes will match nodes in stack
    let node
    // this means backtracking
    if (nodeStack[0]?.index === i) {
      node = nodeStack.shift()
      backtracking = false

      // check span is not already at min - make sure to check
      if (node.usedSpan - 1 > 0) {
        node.usedSpan -= 1
      } else {
        if (!nodeStack[0]) {
          throw new Error('Hit empty nodeStack')
        }
        // if it cannot go lower go back to next
        i = nodeStack[0].index
        continue
      }


    } else {
      node = new Node({
        index: i,
        originalValue: digits[i],
        // subtract prev to get current span - skip on first item
        usedSpan: nodeStack[0] ? digits[i] - nodeStack[0].usedSpan : digits[i],
      })
    }

    for (let j = node.usedSpan; j > 0; j--) {
      const remainingLen = digits.length - i
      // check current value GT remain length - last node must equal
      if (node.usedSpan > remainingLen) {
        // backtrack - reset to top nodeStack pos
        const stackTop = nodeStack[0]
        if (!stackTop) throw new Error('Stack cannot be empty')
        // set to backtrack
        i = stackTop.index
        backtracking = true
        break
      }
      //push values - when equal we are at end of line - use it to finish off length
      if (node.usedSpan === remainingLen) {
        nodeStack.unshift(node)
        // reverse arr to get str order
        const runValues = nodeStack.toReversed().map((node) => node.usedSpan)
        const s = runValues.join('')
        // if shortest not set or new shortest is found
        if (!currentShortLen) {
          currentShortLen = s.length
        }
        // new shortest found
        if (s.length < currentShortLen) {
          currentShortLen = s.length
          // empty const values arr
          values.splice(0, values.length)
          values.push(s.split(''))
        } else if(s.length === currentShortLen) {
          values.push(s.split(''))
        }
        // discard any longer strs
        break
      }
      const spanEndDigit = digits[node.index + j]
      if (!spanEndDigit) {
        throw new Error('indexed past end of array')
      }
      // next node not LT zero
      if (spanEndDigit - node.usedSpan > 0) {
        // check value not more than currentShortLen
        if (nodeStack.length + 1 > currentShortLen) {
          // backtrack
          backtracking = true
          i = nodeStack[0].index ?? 0
          break
        }
        // accept current node value - update index
        i = i + node.usedSpan // update to new i
        // push to stacks top
        nodeStack.unshift(node)
        break
        // VALUE Return - calc values here
      } else if (spanEndDigit - node.usedSpan === 0 && node.usedSpan === 1) {
        // stack may aleady be empty
        const stackTop = nodeStack[0]
        // set to backtrack - allow empty stack i=0 to kill loop
        backtracking = true
        i = stackTop?.index ?? 0
        break
      } else {
        // TODO: cannot be 1<
        node.usedSpan -= 1
      }
    }
  } while (nodeStack.length)
  return values
}
console.log(solve('51416573385334'))
// console.log(solve('4621'))
// [4,2,3,5]
