//Modules ---> ability to break up our code
const {john, peter} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative')

require('./7-mind') //In Node all files are modules by default.
//console.log(names)

console.log(data)

sayHi('Susan');
sayHi(john)