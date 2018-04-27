import express from 'express';
import bodyParser from 'body-parser';

import apiRoutes from './server/routes/api';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(apiRoutes);


app.listen(3000);

export default app;
