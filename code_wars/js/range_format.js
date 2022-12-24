function solution(list) {
  let fullRange = [];
  let tempRange = [];
  let prev;
  let current;
  for (let i = 0; i < list.length; i++) {
    checker(list[i])
  }
  // put in sep func to call after loop too
  function checker(current){
    if (current === prev + 1) {
      tempRange.push(current);
    } else if (current !== prev + 1) {
      // stringify tempRange and push to fullRange
      if (tempRange.length > 2) {
        // chop off last and first
        let last = tempRange.pop();
        let first = tempRange.shift();
        fullRange.push(`${first}-${last}`)
      } else if (tempRange.length > 0) {
        // spread values to fullRange
        fullRange = [...fullRange, ...tempRange];
      }
      // empty temp
      tempRange = [];
      tempRange.push(current);
    }
    prev = current;
  }
  // call again to handle final list item
  checker()
  return fullRange.join(',');
}
  solution([-6, -3, -2, -1, 0, 3, //4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20
])
