
// var text = "test".split("");
// text.some(function(v,i,a){
//   console.log(a.lastIndexOf(v), i)
// })


//  arr.some(function(v,i,a){
//   console.log(i, arr.lastIndexOf(v) == i, arr.lastIndexOf(v)
// );
// })

function isIsogram(str){
 var text = str.split('');
 text.some(function(current, index, arr){
	 var test = arr.lastIndexOf(current) == index;
    if (test = false){
      return false
    } else {
      return true
    }
	})
}
console.log(isIsogram("dersrrrtrdc"))


///////////REGEX/////////////////
function isIsogram(str){
 return !/(\w).*\1/i.test(str);
}
