function factorialize(num) {
  if (num === 0){
    return 1
  } else {
    var product = num;
    for (var i = num -1 ; i > 0; i--) {
      product *= i
    }
  }
  return product
}
console.log(factorialize(0));

// console.log(product)
