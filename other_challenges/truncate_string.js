function truncateString(str, num) {
  if (str.length > num && num > 3){
    var str1 = str.slice(0, num - 3);
    var newStr = str1 + "...";
    return newStr;
  } else if (str.length > num && num <= 3){
    var str1 = str.slice(0,num);
    var newStr = str1 + "...";
    return newStr
  } else {
    return str
  }
}


console.log(truncateString("Absolutely Longer", 2))
