function getUserPromise() {
    const result = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (result) {
                resolve({ id: 1, name: 'John Doe' });
            }
            else {
                reject('Error occurred');
            }
        }, 2000);
    })
}
function getOrderPromise(Id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ orderId: 1, userId: Id, product: 'iPhone 14' });
        }, 2000);
    })
}

function getOrderDetail(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ product: 'iPhone 14', price: 100, quantity: 10, orderId: orderId })
        }, 2000)
    })
}


const userPromise = getUserPromise();
// console.log(userPromise);
userPromise.then((user) => {
    console.log('User:' + JSON.stringify(user));
    return getOrderPromise(user['id']);
}).then((order) => {
    console.log('Order:' + JSON.stringify(order));
    return getOrderDetail(order['orderId'])
}).then((orderDetail) => {
    console.log('DonHang ', JSON.stringify(orderDetail))

}).catch((error) => {
    console.log('Error message:' + error);
});