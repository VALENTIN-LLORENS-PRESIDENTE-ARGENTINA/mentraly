import express from 'express';
import healthRouter from './routes/health';

const app = express();
app.use(express.json());

app.use('/', healthRouter);   // <- monta /ping aquí

export default app;
