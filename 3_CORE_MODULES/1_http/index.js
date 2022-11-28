import http from 'http';

const port = 3000;

const server = http.createServer((req, res) => {
    res.write("Servidor http direto do core do Node.js");
    res.end();
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})