function destroyer(arr) {

// splice array out of input
  var args = [] // this leave this as second_part
  // console.log(args)
  for(var i = 0;i < arguments.length;i++){
    args.push(arguments[i])
  }
  var first_part = args.splice(0,1)//array of top- its' nested so needs to be unnested

  var normal = [];


  for (var i=0;i<first_part.length;i++){
    // console.log(first_part[i])
    for(var j=0;j<first_part[i].length;j++){
      // console.log(first_part[i][j])
      normal.push(first_part[i][j])
      }
    }

  return normal.filter((val) => {
    return !args.includes(val)
  })

}


destroyer([1, 2, 3, 1, 2, 3], 2, 3)
