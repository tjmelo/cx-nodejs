const https = require('https'),
      fs = require('fs');

var hostOpt = {
    key: fs.readFileSync('./conf/key.pem', 'utf8'),
    cert: fs.readFileSync('./conf/cert.pem', 'utf8'),
}

var app = (req, res) => {
    res.writeHead(200);
    res.end(`Hello Word!`);
}

https.createServer(hostOpt, app).listen(3001, () => console.log(`Server https running...`))