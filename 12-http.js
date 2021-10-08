//http module
//helps setting up webserver
const http = require('http')
const server = http.createServer((req, res) => {
 res.write("Hello!")
 res.end()//So it doesn't wait here 
})

server.listen(5500)