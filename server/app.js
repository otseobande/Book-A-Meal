/* eslint no-console: 0 */
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import {
  trimStrings,
  handleErrors
} from './middlewares';
import apiRoutes from './routes/api';
import otherRoutes from './routes/others';

const app = express();
const port = process.env.PORT || 3000;

app.use(
  logger('dev'),
  cors(),
  express.urlencoded({ extended: true }),
  express.json(),
  trimStrings,
  apiRoutes, otherRoutes,
  handleErrors
);

const server = app.listen(port, () => {
  console.log(`Server started on port ${server.address().port}`);
});

export default app;
