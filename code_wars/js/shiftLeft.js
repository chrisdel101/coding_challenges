function shiftLeft(s, t) {
  if (s === t) return 0;
  if (t.length > s.length) {
    let temp = t;
    t = s.split("");
    s = temp.split("");
  } else {
    s = s.split("");
    t = t.split("");
  }
  let count = 0;
  while (s) {
    s.shift();
    count++;
    if (s.join("") === t.join("")) return count;

    if (t.length >= s.length) {
      t.shift();
      count++;
    }
    if (s.join("") === t.join("")) return count;
  }
  return count;
}
console.log(shiftLeft("test", "west"));
