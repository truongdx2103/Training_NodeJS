import fs from 'fs';

export function readFileSync() {
    console.log('Buoc 1: Bat dau doc file');

    const data = fs.readFileSync('./data.txt', 'utf-8');
    console.log('Buoc 2: Data da doc:', data);

    console.log('Buoc 3: Hoan tat doc file');
}

// readFileSync();

export function writeFileSync() {
    console.log('Buoc 1: Bat dau ghi file');
// fs.writeFileSync('./data.txt', "Day 2: Sync vs Async", 'utf-8');
    fs.appendFileSync('./data.txt', "\n=========Day la dong noi tiep theo=========", 'utf-8');
}

// readFileSync();

// module.exports = { readFileSync, writeFileSync };

