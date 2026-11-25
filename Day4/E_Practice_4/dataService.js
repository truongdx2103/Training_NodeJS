
const fs = require('fs');


function getUserPromise(id) {

    return new Promise((resolve, reject) => {

        fs.promises.readFile('./user.json', 'utf-8')
            .then(data => {

                const user = JSON.parse(data)

                if (user.id === parseInt(id)) {
                    resolve(user)
                }
                else {
                    reject("Ko có user id hợp lệ")
                }


            })
            .catch(err => {
                reject(err)
            })



    })

}

function getOrderPromise(userid) {

    return new Promise((resolve, reject) => {

        fs.promises.readFile('./order.json', 'utf-8')
            .then(data => {

                const order = JSON.parse(data);
                if (order.userId === parseInt(userid)) {
                    resolve(order)

                }
                else {
                    reject('Ko tìm thấy Order')
                }


            })
            .catch(err => {
                reject(new Error(`Lỗi từ getOrderPromise: ${err.message}`))
            })
    })

}


function getOrderDetail(orderId) {

    return new Promise((resolve, reject) => {

        fs.promises.readFile('./orderDetails.json', 'utf-8')
            .then(data => {

                const orderDetail = JSON.parse(data);
                if (orderDetail.orderId === parseInt(orderId)) {
                    resolve(orderDetail)
                }
                else {
                    reject('Ko tìm thấy orderDetail')
                }
            })
            .catch(err => {
                reject(new Error(`Lỗi từ getOrderDetail: ${err.message}`))
            })
    })
}

// Xử lý bằng Promise chain
// const user = getUserPromise();
// user
//     .then(user => {
//         console.log("Dữ liệu của User")
//         console.log(user)
//         return getOrderPromise(user.id)
//     })
//     .then(order => {
//         console.log('Dữ liệu của Order')
//         console.log(order)
//         return getOrderDetail(order.orderId)
//     })
//     .then(orderDetail => {
//         console.log("Dữ liệu của orderDetail");
//         console.log(orderDetail)
//     }
//     )


//     .catch(err => {
//         console.log('Lỗi in user data: ', err)
//     })


// Xử lý bằng async await

// async function main() {

//     try {

//         const user = await getUserPromise();
//         console.log("Dữ liệu user");
//         console.log(user)

//         const order = await getOrderPromise(user.id);
//         console.log("Dữ liệu order");
//         console.log(order);

//         const orderDetail = await getOrderDetail(order.orderId);
//         console.log("Dữ liệu orderDetail");
//         console.log(orderDetail);



//     } catch (error) {

//         console.log("lỗi từ function async await", error)

//     }

// }

// main()


module.exports = { getUserPromise, getOrderPromise, getOrderDetail }
