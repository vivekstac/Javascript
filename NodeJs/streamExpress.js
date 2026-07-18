const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const DATA_FILE = path.join(__dirname, "users.jsonl");

// ✅ Helper: Read request body using stream (Express already does this)
app.use(express.json());

/* ------------------------------------
  ✅ READ ALL USERS (STREAM READ)
--------------------------------------*/
app.get("/users", (req, res) => {
    const readStream = fs.createReadStream(DATA_FILE, "utf8");

    let users = [];

    readStream.on("data", (chunk) => {
        chunk
            .split("\n")
            .filter(Boolean)
            .forEach((line) => users.push(JSON.parse(line)));
    });

    readStream.on("end", () => {
        res.json(users);
    });
});

/* ------------------------------------
  ✅ CREATE USER (STREAM WRITE)
--------------------------------------*/
app.post("/users", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: "name and email required" });
    }

    const newUser = {
        id: Date.now(),
        name,
        email,
    };

    const writeStream = fs.createWriteStream(DATA_FILE, { flags: "a" });
    writeStream.write(JSON.stringify(newUser) + "\n");
    writeStream.end();

    res.status(201).json({ message: "User added", newUser });
});

/* ------------------------------------
  ✅ UPDATE USER (STREAM COPY & REWRITE)
--------------------------------------*/
app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;

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
        fs.renameSync(tempFile, DATA_FILE); // replace original
        res.json({ message: "User updated" });
    });
});

/* ------------------------------------
  ✅ DELETE USER (STREAM COPY & FILTER)
--------------------------------------*/
app.delete("/users/:id", (req, res) => {
    const id = req.params.id;

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
        res.json({ message: "User deleted" });
    });
});

/* ------------------------------------
  ✅ SERVER
--------------------------------------*/
app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});
