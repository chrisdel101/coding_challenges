var mapEX = array.map(coolFunction);

// Same as

var mapEX = []
  for (var i = 0;i < array.length;i++){
    array[i] = coolFunction(array[i]);
  }
