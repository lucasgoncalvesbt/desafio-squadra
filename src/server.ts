import 'reflect-metadata';
import express, {
  Request, Response, NextFunction, json,
} from 'express';

import 'express-async-errors';

import errorHandler from './errors/ErrorHandler';
import { router } from './routes';

import './database';

const app = express();

app.use(json());

app.use(router);

app.use(errorHandler.handle);

app.listen(3333, () => console.log('Server is running on port 3333 🚀🚀'));
