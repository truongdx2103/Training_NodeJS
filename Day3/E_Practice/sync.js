const fs = require('node:fs');

function readFileSync() {

    const data = fs.readFileSync('./text.txt', 'utf-8');

    const dataObj = JSON.parse(data);

    return dataObj;


}

function writeFileSync() {

    const newObj = {
        id: 4,
        product: "sanpham4",
        price: 400,
        isAvailable: true
    }

    fs.writeFileSync('./text.txt', JSON.stringify(newObj), 'utf-8')


}


module.exports = { readFileSync, writeFileSync }



