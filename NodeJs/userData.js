const express = require("express");
const app = express();

app.use(express.json());

// Temporary in-memory database
let users = [];

/* -------------------------
 ✅ Middleware 1: Validate Request Body
--------------------------*/
function validateUser(req, res, next) {
    const { userName, password } = req.body;

    if (!userName || !password) {
        return res.status(400).json({ error: "userName and password are required" });
    }

    next(); // ✅ Allow route to continue
}

/* -------------------------
 ✅ Middleware 2: Check User Exists
--------------------------*/
function checkUserExists(req, res, next) {
    const { id } = req.params;
    const user = users.find(u => u.id == id);

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    req.user = user; // ✅ Attach found user to request
    next();
}

/* -------------------------
 ✅ CREATE USER
--------------------------*/
app.post("/user", validateUser, (req, res) => {
    const { userName, password } = req.body;

    const newUser = {
        id: Date.now(),
        userName,
        password
    };

    users.push(newUser);

    return res.status(201).json({
        message: "User created successfully",
        user: newUser
    });
});

/* -------------------------
 ✅ READ ALL USERS
--------------------------*/
app.get("/user", (req, res) => {
    return res.json(users);
});

/* -------------------------
 ✅ READ SINGLE USER
--------------------------*/
app.get("/user/:id", checkUserExists, (req, res) => {
    return res.json(req.user);
});

/* -------------------------
 ✅ UPDATE USER
--------------------------*/
app.put("/user/:id", checkUserExists, validateUser, (req, res) => {
    const { userName, password } = req.body;

    req.user.userName = userName;
    req.user.password = password;

    return res.json({
        message: "User updated successfully",
        updatedUser: req.user
    });
});

/* -------------------------
 ✅ DELETE USER
--------------------------*/
app.delete("/user/:id", checkUserExists, (req, res) => {
    users = users.filter(u => u.id != req.params.id);

    return res.json({ message: "User deleted successfully" });
});

app.listen(4000, () => {
    console.log("Server running on port 4000");
});
