import express, { Router, Request, Response } from 'express';

const app = express();

const route = Router();

app.use(express.json());

app.use(route);

app.listen(3333, () => console.log('Server is running on port 3333 🚀🚀'));
