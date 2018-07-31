import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import logger from './utils/logger';
import { bodyTrimmer, errorHandler } from './middlewares';
import setEventListeners from './events/setEventListeners';
import apiRouter from './routes/api';
import clientRouter from './routes/client';
import config from './config';

const app = express();
const port = process.env.PORT || 3000;

app.config = config;

setEventListeners(app);

app.use(
  morgan('combined'),
  cors(),
  express.urlencoded({ extended: true }),
  express.json(),
  bodyTrimmer,
  apiRouter, clientRouter,
  errorHandler
);

const server = app.listen(port, () => {
  logger.info(`Server started on port ${server.address().port}`);
});

export default app;
