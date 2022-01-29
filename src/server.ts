import 'reflect-metadata';
import express, { json } from 'express';

import { route } from './routes';

import './database';

const app = express();

app.use(json());

app.use(route);

app.listen(3333, () => console.log('Server is running on port 3333 🚀🚀'));
