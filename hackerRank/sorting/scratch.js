var str = `0 ab 
6 cd
0 ef
6 gh
4 ij
0 ab
6 cd
0 ef
6 gh
0 ij
4 that
3 be
0 to
1 be
5 question
1 or
2 not
4 is
2 to
4 the`

var r = new RegExp(/\d+\s\w+\n/gi)
var s = str.replace(/\n/g, ",");
console.log(s.split(','))