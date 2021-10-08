//Reading from file
//Writing to file.
//Synchoruns 
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first, second)
//{flag: 'a'} means append dont overwrite.
writeFileSync('./content/result.txt', `Here is the result: ${first}, ${second}`, {flag:'a'})