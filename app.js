import express from 'express';
import bodyParser from 'body-parser';

import apiRoutes from './server/routes/api';

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(apiRoutes);


app.listen(port);

export default app;
