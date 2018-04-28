import express from 'express';

import apiRoutes from './server/routes/api';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(apiRoutes);

app.listen(port);

export default app;
