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

function retry(fn, count) {
    return new Promise((resolve, reject) => {

        function attempt(remaining) {
            fn()
                .then(resolve)
                .catch(err => {
                    console.log(err, `retry remaining: ${remaining}`);

                    if (remaining === 0) {
                        reject(err);
                    } else {
                        attempt(remaining - 1);
                    }
                });
        }

        attempt(count);
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
