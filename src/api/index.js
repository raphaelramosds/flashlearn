import http from 'http';
import formidable from 'formidable';

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

    else if (req.method === 'POST' && req.url === '/file') {
        let filePath = '';
        const form = formidable({});

        form.parse(req, (err, fields, files) => {
            if (err) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: 'Upload when uploading file' }));
                return;
            }

            console.log('Arquivo recebido:', files.file);
            filePath = files.file[0].filePath;
            res.writeHead(200);
            res.end(JSON.stringify({ message: 'Upload feito com sucesso!'}));
        });

        console.log(filePath)
    }

    else {
        res.statusCode = 404;
        res.end('Resource ' + req.method + ' ' + req.url + ' is unknown');
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});