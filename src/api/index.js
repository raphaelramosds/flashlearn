import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method == 'GET' && req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({message: 'Server is alive!'}) );
    }

    else if (req.method == 'POST' && req.url == '/file') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('You\'ve requested a file');
    }

    else {
        res.statusCode = 404;
        res.end('Resource ' + req.method + ' ' + req.url + ' is unknown');
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});