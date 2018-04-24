import express from 'express';
import MealRoutes from './server/routes/mealRoutes';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ..Routes
app.use('/meals', MealRoutes);

app.get('/',function(req, res){
	res.send('Welcome to Book-A-Meal');
});

app.listen(3000);