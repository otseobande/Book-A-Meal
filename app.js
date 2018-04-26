import express from 'express';
import bodyParser from 'body-parser';

import MealRoutes from './server/routes/mealRoutes';
import MenuRoutes from './server/routes/menuRoutes';


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const apiPrefix = '/api/v1';

// ..Routes
app.use(`${apiPrefix}/meals`, MealRoutes);
app.use(`${apiPrefix}/menus`, MenuRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Book-A-Meal');
});

app.listen(3000);

export default app;
