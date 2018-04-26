import express from 'express';
import bodyParser from 'body-parser';

import MealsRoutes from './server/routes/mealsRoutes';
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

app.get('/', (req, res) => {
  res.send('Welcome to Book-A-Meal');
});

app.listen(3000);

export default app;
