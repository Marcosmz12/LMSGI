const http = require('node:http');

const PORT = 3014;

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (req.url === '/') {
        res.end('<h1>Hola Mundo ! =)</h1>');

    } else if (req.url === '/alumno') {
        res.setHeader('Content-Type', 'text/json;');

        let alumno = {
            nombre: Juan,
            edad: 21
        };

        res.end(JSON.stringify(alumno));
    } else {
        res.statusCode = 404;
        res.end('<h1>404 Not Found =(</h1>');
    }
};

const server = http.createServer(processRequest);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});