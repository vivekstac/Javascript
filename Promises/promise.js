function promiseFn(isSuccess) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccess) {
                resolve("Data success");
            } else {
                reject("Data failed");
            }
        }, 1000);
    });
}

promiseFn(true)
    .then(res => console.log(res))
    .catch(err => console.log(err));


function delayedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved after 2 seconds");
        }, 2000);
    });
}

delayedPromise().then(console.log);

function randomPromise() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve("Success");
        } else {
            reject("Failure");
        }
    });
}

randomPromise()
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Promise All And Promise allSettle

const promiseA = Promise.resolve('A');
const promiseB = Promise.reject('B failed');
const promiseC = Promise.resolve('C');

Promise.allSettled([promiseA, promiseB, promiseC])
    .then(results => {
        console.log('All tasks succeeded:', results);
    })
    .catch(error => {
        console.error('One of the tasks failed:', error);
    });
// .allSettled() it returns an array [{1, 2, 3}]

Promise.all([promiseA, promiseB, promiseC])
    .then(results => {
        console.log('All tasks succeeded:', results);
    })
    .catch(error => {
        console.error('One of the tasks failed:', error);
    });
// .all() it returns an array [{1, 2, 3}]

Promise.race([promiseA, promiseB, promiseC])
    .then(result => {
        console.log('First settled promise result:', result); // Will log 'B succeeded'
    })
    .catch(err => {
        console.error('First settled promise rejected:', err);
    });
// .race() it returns one promise that get resolved
