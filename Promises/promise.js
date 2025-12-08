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
