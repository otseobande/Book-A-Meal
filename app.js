import express from 'express';
import bodyParser from 'body-parser';

import { MealsRoutes } from './server/routes';
import MenusRoutes from './server/routes/menusRoutes';
import MenuRoutes from './server/routes/menuRoutes';


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const apiPrefix = '/api/v1';

// ..Routes
app.use(`${apiPrefix}/menu`, MenuRoutes);
app.use(`${apiPrefix}/meals`, MealsRoutes);
app.use(`${apiPrefix}/menus`, MenusRoutes);

app.listen(3000);

export default app;
