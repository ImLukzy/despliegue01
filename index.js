require('dotenv').config();

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<h1>Servidor funcionando con dotenv</h1>');
});

server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});