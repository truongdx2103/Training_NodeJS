

const http = require('node:http');

const { readFileSync, writeFileSync } = require('./sync');


const server = http.createServer((req, res) => {

    const pathname = req.url.split('?');
    const part = pathname[0].split('/')[4];
    const id = pathname[1].split('=')[1];
    console.log(pathname)

    console.log(part)

    if (req.method === 'GET' && id && pathname[0] === '/api/products') {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            id: id,
            product: "sanpham4",
            price: 400,
            isAvailable: true
        }))
        return

    }

    if (req.method === 'GET' && req.url === '/api/products') {

        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(readFileSync()))
        return

    }

    if (req.method === 'GET' && req.url === '/api/addproducts') {

        writeFileSync()
        res.writeHead(200, { 'Content-Type': 'text/plain ; charset=utf-8' });
        res.end('Đã add thành công')
        return

    }






    res.writeHead(200, { 'Content-Type': "text/plain" });
    res.end('Hello World')


})


server.listen(3000, () => {
    console.log('server is running on http://localhost:3000')
})