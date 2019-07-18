// Write a program to count the occurrences of all letter pairs in a sample of text. Disregard differences between lower and upper case letters.
let pairs = {}
let arr1 = []
let arr2 = []
let w = 'This is a word'
for (let index = 0; index < w.length; index++) {
  if (w[index] !== ' ') {
    arr1.push(w[index])
  }
}

for (let i = 0; i < arr1.length; i++) {
  let str = ''
  if (arr1[i]) {
    str += arr1[i]
  }
  for (let j = i + 1; j < i + 2; j++) {
    if (arr1[j]) {
      str += arr1[j]
    }
  }
  arr2.push(str)
}
for (let pair of arr2) {
  if (!pairs[pair]) {
    pairs[pair] = 1
  } else {
    pairs[pair]++
  }
}
console.log(pairs)
