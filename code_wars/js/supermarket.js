
function queueTime(customers, n) {

// create registers


  function Register(number, customer){
    this.number = number;
  }
  var registers = []
  for (var i = 0; i < n; i++) {
    var register = new Register(i + 1)
    registers.push(register)
  }
  console.log(registers)
  for (var i = 0; i < customers.length; i++) {
    console.log(customers[i])
  }
}

  // for (var i = 0; i < registers.length; i++) {

  // }

  // }




queueTime([1,4,5,3], 4)
