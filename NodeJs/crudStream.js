const http = require("http");
const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "users.jsonl");

// Helper: read request body using streams
function readRequestBody(req) {
    return new Promise((resolve) => {
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => resolve(body));
    });
}

// ✅ Create Server
const server = http.createServer(async (req, res) => {
    // ✅ GET All Users (read stream)
    if (req.url === "/users" && req.method === "GET") {
        const readStream = fs.createReadStream(DATA_FILE, "utf8");

        let users = [];

        readStream.on("data", (chunk) => {
            chunk
                .split("\n")
                .filter(Boolean)
                .forEach((line) => users.push(JSON.parse(line)));
        });

        readStream.on("end", () => {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(users, null, 2));
        });

        return;
    }

    // ✅ POST Create User (write stream)
    if (req.url === "/users" && req.method === "POST") {
        const body = await readRequestBody(req);
        const { name, email } = JSON.parse(body);

        const newUser = {
            id: Date.now(),
            name,
            email,
        };

        const writeStream = fs.createWriteStream(DATA_FILE, { flags: "a" });
        writeStream.write(JSON.stringify(newUser) + "\n");
        writeStream.end();

        res.writeHead(201, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "User added", newUser }));
    }

    // ✅ PUT Update User
    if (req.url.startsWith("/users/") && req.method === "PUT") {
        const id = req.url.split("/")[2];
        const body = await readRequestBody(req);
        const { name, email } = JSON.parse(body);

        const tempFile = DATA_FILE + ".tmp";

        const readStream = fs.createReadStream(DATA_FILE, "utf8");
        const writeStream = fs.createWriteStream(tempFile);

        readStream.on("data", (chunk) => {
            chunk
                .split("\n")
                .filter(Boolean)
                .forEach((line) => {
                    let user = JSON.parse(line);
                    if (user.id == id) {
                        user.name = name;
                        user.email = email;
                    }
                    writeStream.write(JSON.stringify(user) + "\n");
                });
        });

        readStream.on("end", () => {
            writeStream.end();
            fs.renameSync(tempFile, DATA_FILE); // replace file
            res.writeHead(200);
            res.end("User updated");
        });

        return;
    }

    // ✅ DELETE User
    if (req.url.startsWith("/users/") && req.method === "DELETE") {
        const id = req.url.split("/")[2];
        const tempFile = DATA_FILE + ".tmp";

        const readStream = fs.createReadStream(DATA_FILE, "utf8");
        const writeStream = fs.createWriteStream(tempFile);

        readStream.on("data", (chunk) => {
            chunk
                .split("\n")
                .filter(Boolean)
                .forEach((line) => {
                    const user = JSON.parse(line);
                    if (user.id != id) writeStream.write(JSON.stringify(user) + "\n");
                });
        });

        readStream.on("end", () => {
            writeStream.end();
            fs.renameSync(tempFile, DATA_FILE);
            res.writeHead(200);
            res.end("User deleted");
        });

        return;
    }

    // Default route
    res.writeHead(404);
    res.end("Not Found");
});

// ✅ Start server
server.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});
