const https = require("https");

https.get("https://jsonplaceholder.typicode.com/users", (res) => {
    let data = "";

    // collecting chunks
    res.on("data", chunk => {
        data += chunk;
    });

    console.log(data)
    // final data
    res.on("end", () => {
        const result = JSON.parse(data);
        console.log("Array of data:", result);
    });

}).on("error", (err) => {
    console.log("Error:", err.message);
});


function getUsers() {
    return new Promise((resolve, reject) => {
        https.get("https://jsonplaceholder.typicode.com/users", (res) => {
            let data = "";

            res.on("data", chunk => {
                data += chunk;
            });

            res.on("end", () => {
                try {
                    const result = JSON.parse(data);
                    resolve(result); // ✅ return value
                } catch (err) {
                    reject(err);
                }
            });
        }).on("error", err => {
            reject(err);
        });
    });
}

// usage
getUsers()
    .then(result => {
        console.log("Array of data:", result);
    })
    .catch(err => {
        console.error("Error:", err);
    });
