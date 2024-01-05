import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json';
import errorHandler from './middlewares/error';
import ebookRouter from './routes/Ebook';
import nodemailerRouter from './routes/NodemailerRouter';
import personRouter from './routes/Person';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(ebookRouter);
app.use(personRouter);
app.use(nodemailerRouter);

app.use(errorHandler);

export default app;
