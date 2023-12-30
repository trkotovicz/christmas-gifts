import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import ebookRouter from './routes/Ebook';

const app = express();
app.use(express.json());
app.use(cors());

app.use(ebookRouter);

app.use(errorHandler);

export default app;