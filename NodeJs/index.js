const express = require("express")
const cors = require("cors")

const app = express();
const PORT = 4000;


// Middlewares
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

app.get("/api/message", (req, res) => {
    res.json({ message: "Hellow World" })
})


app.listen(PORT, () => {
    console.log(`Server is listening on port: http://localhost/${PORT}`)
})
