const http = require('node:http');
// import { http } from 'node:http';

const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/api/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const users = {
            id: 1,
            name: 'Nguyen Van A',
            age: 30,
            male: true
        }
        res.end(JSON.stringify(users));
        return;
    }

    if (req.method === 'GET' && req.url === '/api/products') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const products = {
            id: 1,
            name: 'Iphone 15',
            price: 30000000,
            isAvailable: true
        }
        res.end(JSON.stringify(products));
        return;
    }

    console.log('Request method:', req.method);

    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Hello World!');
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Read - Get - Goi va truyen param qua URL
// Write - Post - Goi va truyen param qua body
// Update - Put - Goi va truyen param qua body - truyen lai tat ca field
// Update - Patch - Goi va truyen param qua body - chi truyen field update
// Delete - Delete - Goi va truyen param qua URL