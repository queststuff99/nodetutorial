const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
        return
    }
    if(req.url === '/about'){
        res.end('This is my about page')
        return
    }
    res.end('<a href="/"> Wrong page sucka </a>')
    return
})

server.listen(5000)