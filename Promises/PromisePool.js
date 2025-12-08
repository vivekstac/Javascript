async function promisePool(functions, n) {
    let i = 0; // pointer to next function

    // define an async helper to start the next function
    async function next() {
        if (i >= functions.length) return; // no more tasks

        const fn = functions[i++]; // pick next function
        await fn(); // execute and wait
        await next(); // after finishing, start next
    }

    // run 'n' promises concurrently
    const pool = [];
    for (let j = 0; j < n; j++) {
        pool.push(next());
    }

    // wait for all tasks to complete
    await Promise.all(pool);
}


const timeout = (t) => new Promise(res => setTimeout(res, t));

const functions = [
    () => timeout(300).then(() => console.log('Task 1 done')),
    () => timeout(200).then(() => console.log('Task 2 done')),
    () => timeout(500).then(() => console.log('Task 3 done')),
    () => timeout(100).then(() => console.log('Task 4 done')),
];

(async () => {
    await promisePool(functions, 2);
    console.log('All done!');
})();

async function f() {
    await promisePool(functions, 2);
    return "All Done"
}

f().then(msg => console.log(msg)).catch(err => console.log(err));

(async (arr, t) => {
    let i = 0;

    async function next() {
        if (i >= arr.length) return;

        const fn = arr[i++]

        await fn();
        await next()
    }

    const pool = [];

    for (let j = 0; j < t; j++) {
        pool.push(next())
    }

    await Promise.all(pool)
    console.log("All Done")
})(functions, 2)

// Invoke immediately function expression



async function promisePool(arr) {
    for (let fn of arr) {
        await fn()
    }

    console.log("All Done")
}

promisePool(functions)