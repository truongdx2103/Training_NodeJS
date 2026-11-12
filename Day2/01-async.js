const fs = require('node:fs');

console.log('Buoc 1: Bat dau doc file');

fs.readFile('./data.txt', 'utf-8', (err, data) => {
    // if (err) {
    //     console.error('Loi khi doc file:', err);
    //     return;
    // }
    console.log('Buoc 2: Data da doc:', data);
});

console.log('Buoc 3: Hoan tat doc file');