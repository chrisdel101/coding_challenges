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
  while (!(nodeStack.length) || (i !== 0 || nodeStack[0]?.usedSpan !== 1)) {
    // console.log('i', i)
    if(i === 2){
      let c = 1
    }
    // if we backtracked check if top node is same index to reuse - else add new node
    let node
    // this means backtracking
    if (nodeStack[0]?.index === i) {
      node = nodeStack.shift()
      // check span is not already at min
      if(node.usedSpan - 1  > 0) {
        node.usedSpan -= 1
      } else {
        if(!nodeStack[0]){
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
        console.log(i)
        break
      }
      // if equal use it to finish length
      if(node.usedSpan === remainingLen){
        nodeStack.unshift(node)
        const runValues = nodeStack.map(node => node.usedSpan)
        // collect all values
        const s = runValues.join('')
        const check = values.some(val => val === s)
        if(check){
          // console.log('DUPE FOUND', s)
        }
        values.push(s)
        break
      }
        
      // console.log(`${digits[j]} - ${node.usedSpan}`)
      const spanEndDigit = digits[node.index + j]
      if(!spanEndDigit) {
        throw new Error("indexed past end of array")
      }
      // check next node value - current not LT zero - span must be GE than 1 or cannot shorten
      if (spanEndDigit - node.usedSpan > 0) {
        // console.log('next not zero', `${spanEndDigit - node.usedSpan}`)
        // console.log('push node value', `${node.usedSpan}`)
        // accept current node value - update index
        i = i + node.usedSpan // update to new i
        // console.log('set next index', `${i}`)
        // push to stacks top
        nodeStack.unshift(node)
        break
      } else if(spanEndDigit - node.usedSpan === 0 && node.usedSpan === 1){
        // backtrack 
        const stackTop = nodeStack[0]
        if (!stackTop) {
          console.log("Empty stack", i)
          return values
        }
        // set to backtrack
        i = stackTop.index
        break
      } else {
        node.usedSpan -= 1
      }
    }
  }
  return values
}
console.log(solve('51416573385334'))
// solve('51416573385334')
// [4,2,3,5]
