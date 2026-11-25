// function getUser() {
//     setTimeout(() => {
//         return { id: 1, name: 'John Doe' }
//     }, 0);
// }

// const user = getUser();
// console.log(user);

// function getUser(callback) {
//     setTimeout(() => {
//         const user = { id: 1, name: 'John Doe' };
//         callback(user);
//     }, 0);
// }

// getUser((user) => {
//     console.log("Thong tin user:" + JSON.stringify(user));
// });

// Promises = Pending
// Promises = Fulfilled/Resolved
// Promises = Rejected


function getUserPromise() {
    const result = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (result) {
                resolve({ id: 1, name: 'John Doe'});
            }
            else {
                reject('Error occurred');
            }
        }, 2000);
    })
}

// function getOrderPromise(Id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ orderId: 1, userId: Id, product: 'iPhone 14' });
//         }, 2000);
//     })
// }

// const userPromise = getUserPromise();
// // console.log(userPromise);
// userPromise.then((user) => {
//     console.log('User:' + JSON.stringify(user));
//     return getOrderPromise(user['id']);
// }).then((order) => {
//     console.log('Order:' + JSON.stringify(order));
// }).catch((error) => {
//     console.log('Error message:' + error);
// });

// async function getUserAsync() {
//     try {
//         const user = await getUserPromise();
//         console.log('User:' + JSON.stringify(user));
//     } 
//     catch (error) {
//         console.log('Phat sinh 1 loi');
//     }

// }

// const userAsync = getUserAsync();
// console.log(userAsync);


console.log('Buoc 1');

async function main() {
    console.log('Buoc 2');

    await Promise.resolve();

    console.log('Buoc 3');
}

main();

console.log('Buoc 4');





// getUserPromise() {
//     getOrderPromise() {
//         get
//     }
// }



