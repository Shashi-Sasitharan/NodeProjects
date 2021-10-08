 //OS Module
 const os = require('os')// no dot so node knows its default module.

 //info about user
 const user = os.userInfo();
 console.log(user)
 
 //sustem uptime
 console.log(`Uptime: ${os.uptime()}`)
 
 const currentOS= {
     name: os.type(),
     release: os.release(),
     totalMem: os.totalmem(),
     freeMem: os.freemem()
 }
 
 console.log(currentOS)
 
 