/* eslint no-console: 0 */
import express from 'express';
import logger from 'morgan';
import {
  trimStrings,
  handleErrors
} from './middlewares';
import setEventListeners from './events/setEventListeners';
import apiRoutes from './routes/api';
import otherRoutes from './routes/others';

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
setEventListeners(app);
app.use(trimStrings, apiRoutes, otherRoutes, handleErrors);

const server = app.listen(port, () => {
  console.log(`Server started on port ${server.address().port}`);
});

export default app;
