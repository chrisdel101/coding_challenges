function alphabetPosition(str){
  str = str.toLowerCase()
  var arr = []
  for (var i = 0; i < str.length; i++) {
    if(str[i] === "a"){
      arr.push("1")
    }
    else if(str[i] === "b"){
      arr.push("2")
    }
    else if(str[i] === "c"){
      arr.push("3")
    }
    else if(str[i] === "d"){
      arr.push("4")
    }
    else if(str[i] === "e"){
      arr.push("5")
    }
    else if(str[i] === "f"){
      arr.push("6")
    }
    else if(str[i] === "g"){
      arr.push("7")
    }
    else if(str[i] === "h"){
      arr.push("8")
    }
    else if(str[i] === "i"){
      arr.push("9")
    }
    else if(str[i] === "j"){
      arr.push("10")
    }
    else if(str[i] === "k"){
      arr.push("11")
    }
    else if(str[i] === "l"){
      arr.push("12")
    }
    else if(str[i] === "m"){
      arr.push("13")
    }
    else if(str[i] === "n"){
      arr.push("14")
    }
    else if(str[i] === "o"){
      arr.push("15")
    }
    else if(str[i] === "p"){
      arr.push("16")
    }
    else if(str[i] === "q"){
      arr.push("17")
    }
    else if(str[i] === "r"){
      arr.push("18")
    }
    else if(str[i] === "s"){
      arr.push("19")
    }
    else if(str[i] === "t"){
      arr.push("20")
    }
    else if(str[i] === "u"){
      arr.push("21")
    }
    else if(str[i] === "v"){
      arr.push("22")
    }
    else if(str[i] === "w"){
      arr.push("23")
    }
    else if(str[i] === "x"){
      arr.push("24")
    }
    else if(str[i] === "y"){
      arr.push("25")
    }
    else if(str[i] === "z"){
      arr.push("26")
    }

  }
  var numStr = arr.toString()
  for (var i = 0; i < numStr.length; i++) {
    numStr = numStr.replace(/\,/g,' ');
  }
  return numStr
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."))
