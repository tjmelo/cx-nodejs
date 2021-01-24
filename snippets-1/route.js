const routes = {
    '/': (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Default route');
        res.end();
    },
    '/api/v1': (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Route API V1');
        res.end();
    },
    '/api/v2': (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Route API V2');
        res.end();
    }
}

module.exports = routes;