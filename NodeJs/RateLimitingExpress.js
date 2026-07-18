const express = require("express");
const app = express();

const requests = new Map();
const WINDOW = 60 * 1000; // 1 minute
const LIMIT = 3;

function rateLimiter(req, res, next) {
    const ip = req.ip;
    const now = Date.now();

    if (!requests.has(ip)) {
        requests.set(ip, { count: 1, startTime: now });
        return next();
    }

    const user = requests.get(ip);

    if (now - user.startTime > WINDOW) {
        requests.set(ip, { count: 1, startTime: now });
        return next();
    }

    if (user.count < LIMIT) {
        user.count++;
        return next();
    }

    return res.status(429).send("Too Many Requests");
}


// Or use express-rate-limit package for better performance and features
// express rate limit package implementation
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 10 * 1000,
    max: 3
});

app.use(limiter);

// end


app.use(rateLimiter);

app.get("/", (req, res) => {
    res.send("API working");
});

app.listen(3000);

const axios = require("axios");

setInterval(async () => {
    try {
        const res = await axios.get("http://localhost:3000/");
        console.log("Success:", res.data);
    } catch (err) {
        console.log("Blocked:", err.response.status);
    }
}, 1000); // Call every 1 second
