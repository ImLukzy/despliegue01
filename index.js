const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<h1>Servidor funcionando correctamente</h1>');
});

server.listen(3000, () => {
    console.log('Servidor en puerto 3000');
});