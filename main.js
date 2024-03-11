const fs=require('fs')
fs.writeFile('welcome.txt',"Hello Node",(err)=>{
    console.log('done')
})
fs.readFile('./hello.txt','utf-8',(err,data)=>{
    (err)? console.log(err):console.log(data)

})
