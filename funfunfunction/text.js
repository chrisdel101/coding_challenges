const fs = require('fs')

var file = fs.readFileSync("./listings copy.txt", 'utf-8')
.split('\n')
.map((line) => line.split('\t'))


console.log(file)
