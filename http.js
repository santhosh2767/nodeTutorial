// const http = require('http')
// const server = http.createServer((req,res)=>{
//     console.log(req);
    
//     res.write('welcome our page');
//     res.end();
// });

// server.listen(5000);

const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome')
        return
    }
    if(req.url === '/about'){
        res.end('short history')
        return
    }
    res.end( `<h1> Oops</h1> <a href="/"> Back to home </a>`)
})

server.listen(8000);