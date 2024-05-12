import express, { Request, Response } from 'express';
import {livPlayers} from "./data/liv-players";
import {pgaPlayers} from "./data/pga-players";
import {rankings} from "./data/rankings";


const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/api/allplayers', (req: Request, res: Response) => {
    res.json(books);
});

app.get('/api/books/:id', (req: Request, res: Response) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found.');
    res.json(book);
});

app.post('/api/books', (req: Request, res: Response) => {
    const newBook: Book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
