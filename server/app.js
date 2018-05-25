import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import logger from './utils/logger';
import { trimStrings, handleErrors } from './middlewares';
import setEventListeners from './events/setListeners';
import apiRoutes from './routes/api';
import clientRoutes from './routes/client';
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
  trimStrings,
  apiRoutes, clientRoutes,
  handleErrors
);

const server = app.listen(port, () => {
  logger.info(`Server started on port ${server.address().port}`);
});

export default app;
