let url = 'http://localhost:3000/api/products?id=4';
const pathname = url.split('?');
const part = pathname[0].split('/')[4];
const id = pathname[1].split('=')[1];
console.log(pathname);
console.log(part)