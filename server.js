
const a=require ('./hello-world')
console.log(a)



const http = require('http');
http.createServer((req,res)=>{
res.write('Hello Node!!!!')
res.end()
}).listen(3000)