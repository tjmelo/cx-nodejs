const { Router } = require('express');
const http = require('http');
const routes = require('./route');

http.createServer( (req, res) => {
    if(req.url in routes) return routes[req.url](req, res);
    res.writeHead(404);
    res.end(http.STATUS_CODES[404]);
    console.log(routes)

}).listen(process.env.PORT || 4000, e => console.log(`Server routes running...`))