const range = (start, stop, step = 1) => {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  )
}
function findVal(n, k) {
  const r = range(1, n)
  let max = 0
  const arr = []
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((r[i] & r[j]) < k) {
        if ((r[i] & r[j]) > max) {
          max = r[i] & r[j]
        }
      }
    }
  }
  return max
}
findVal(5, 2)
