const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    res.end('Hello, Node.js');
});

server.listen(3000, () => {
    console.log('server running at port 3000');
});