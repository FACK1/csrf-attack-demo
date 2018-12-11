const http=require('http');
const router=require('./router.js');
const server=http.createServer(router);
server.listen(9000);
console.log(` the server up and running on port 9000}!`);
