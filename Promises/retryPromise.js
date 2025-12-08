function retry(fn, limit = 3) {
    return new Promise((resolve, reject) => {
        const attempt = (count) => {
            fn()
                .then(resolve)
                .catch(err => {
                    console.log("Retry left:", count);
                    if (count === 0) reject(err);
                    else attempt(count - 1);
                });
        };
        attempt(limit);
    });
}

function apiCall() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.7) {
            resolve("✅ API Success");
        } else {
            reject("❌ API Failed");
        }
    });
}

retry(apiCall, 3)
    .then(console.log)
    .catch(console.error);
