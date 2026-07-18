require("dotenv").config();
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Chat endpoint
app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini", // lightweight & fast model
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: message }
            ],
            temperature: 0.7
        });

        res.json({
            reply: completion.choices[0].message.content
        });

    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});
