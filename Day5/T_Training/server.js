const http = require('node:http');
const PORT = 3000;

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        return res.end();
    }

    if (req.method === 'GET' && req.url === '/api/users') {
        const user = [{
            id: 1,
            name: 'Nguyen Van A'
        },
        {
            id: 2,
            name: 'Nguyen Van B'
        }
        ];
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });

        res.end(JSON.stringify(user));
        return;
    }

    function getRequestData(req) {
        return new Promise((resolve, reject) => {
            let dataBody = '';
            //req.setEndcoding('utf-8');

            req.on('data', (dt) => {
                dataBody += dt;
            });
        })
    }

    if (req.method === 'POST' && req.url === '/api/users') {
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        const dt = await getRequestData(req);
        console.log(dt);


        res.end('OK');
        return;
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/todos`);
});