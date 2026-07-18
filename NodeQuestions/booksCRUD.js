const express = require('express');
const app = express();
app.use(express.json());

let books = [];

app.post('/books', (req, res) => {
    const { title, author } = req.body;
    if (!title) return res.status(400).json({ error: "title required" });

    const book = { id: Date.now(), title, author };
    books.push(book);
    res.status(201).json(book);
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (!book) return res.status(404).json({ error: "not found" });

    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    res.json(book);
});

app.delete('/books/:id', (req, res) => {
    books = books.filter(b => b.id != req.params.id);
    res.json({ success: true });
});

app.listen(3000);
