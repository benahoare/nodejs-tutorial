const http = require('http');

const server = http.createServer((req,res)=> {
    var msg = ''
    if (req.url === '/'){
        res.write('Welcome to our home page')
    }
    else{
        if (req.url === '/about'){
            res.write('This is the about page')
        }
        else{
            msg = '<h1>Oops!</h1> <p>We cannot server the page you are looking for</p> <a href="/">back home</a>'
        }
    }

    
    res.end(msg)
    
            
})

server.listen(5000)