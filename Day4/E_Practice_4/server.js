const fs = require('fs');
const http = require('http');
const { getUserPromise, getOrderPromise, getOrderDetail } = require('./dataService')


const server = http.createServer(async (req, res) => {

    const pathname = req.url.split('?');
    const id = pathname[1]?.split('=')[1]

    if (req.method === 'GET' && id && pathname[0] === '/api/users') {

        try {

            const user = await getUserPromise(id);
            const order = await getOrderPromise(user.id);
            const orderDetail = await getOrderDetail(order.orderId);

            const userDetail = {
                user,
                order,
                orderDetail
            }

            res.writeHead(200, { 'Content-Type': "application/json" });
            res.end(JSON.stringify(userDetail))

        } catch (error) {

            res.writeHead(500, { 'Content-Type': "text/plain; charset=utf8" });
            res.end("Lỗi từ server")

        }



    }



    res.writeHead(200, { 'Content-Type': "text/plain" });
    res.end('Hello world')

})

server.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`)
})