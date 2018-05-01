import express from 'express';
import middlewares from './middlewares';
import apiRoutes from './routes/api';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(middlewares.trimStrings);
app.use(apiRoutes);

app.listen(port);

console.log(`Server started on localhost:${port}`);

export default app;
