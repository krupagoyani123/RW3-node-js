const http = require('http');
const port = 9000;
const fs = require('fs');

const RequestHandlar = (req,res)=>{
    let fileName = "";
    switch(req.url){
        case '/':
            fileName = "./index.html"
         break;
         case '/about':
            fileName = "./about.html"
         break;
         case '/contact':
            fileName = "./contact.html"
         break;
        default:
            fileName = "./404.html";       
    }
    fs.readFile(fileName,(err,data)=>{
        if(err){
            console.log(err);
            return false;
        }
        res.end(data);

    })
}
const server = http.createServer(RequestHandlar);
server.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is running :- ${port}`);
})