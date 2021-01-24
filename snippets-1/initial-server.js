const http =  require('http'),
      port = process.env.PORT || 4001;

http.createServer( (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(`Hello Word!\n`);
    res.end();
}).listen( port, e => console.log(`Logged server..`))