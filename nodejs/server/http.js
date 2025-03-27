const http = require('node:http');

const PORT = 3014;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('Hello World!');
});

server.listen(PORT, () => { 
    console.log(`Server is running on http://localhost:${PORT}`);
});
