const http = require("http");

let storedData = null; // local storage (in-memory)

const server = http.createServer((req, res) => {

    if (req.method === "POST" && req.url === "/store") {
        let body = "";

        // receive data in chunks
        req.on("data", (chunk) => {
            body += chunk;
            console.log("Received chunk:", chunk.toString());
        });

        // all chunks received
        req.on("end", () => {
            storedData = JSON.parse(body);

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message: "Data stored successfully",
                data: storedData
            }));
        });

    } else if (req.method === "GET" && req.url === "/data") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(storedData));

    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
