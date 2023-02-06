// Takes diff input than counting sort1
// take arr, return as split strs
function splitStrArr(subArr) {
  let str = subArr[0]
  str = str.trim()
  return str.split(" ")
}
function countSort(arr) {
  let track = {}
  let midPoint = Math.ceil(arr.length/2)
    for(const [i, a] of arr.entries()){
      let splitArr = splitStrArr(a)
      if(!track[splitArr[0]])
        track[splitArr[0]] = []
      
      track[splitArr[0]].push((i < midPoint ? "-" : splitArr[1]))
    }
    console.log(Object.values(track).flat().join(" "))
    return Object.values(track).flat().join("-")
}

const arr = [
  ['0 ab '],      ['6 cd'],
  ['0 ef'],       ['6 gh'],
  ['4 ij'],       ['0 ab'],
  ['6 cd'],       ['0 ef'],
  ['6 gh'],       ['0 ij'],
  ['4 that'],     ['3 be'],
  ['0 to'],       ['1 be'],
  ['5 question'], ['1 or'],
  ['2 not'],      ['4 is'],
  ['2 to'],       ['4 the']
]
countSort(arr)