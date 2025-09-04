const {readFileSync,writeFileSync, read} = require('fs')
// const fs = require('fs')

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first)
console.log(second)

writeFileSync('./content/third.txt',`Here is the sum :${first} and ${second}`) 
//to append instead pass {flag:'a} as the third input