import Controller from './controller';
import Meals from '../dummy-models/meals';

class MealController extends Controller{
	static createMeal(req, res){
		const { 
				title, 
				description, 
				price, 
				img
			} = req.body;

		if(!title, !description, !price){
			res.status(400).json({
				status: "error",
				message: "Parameters not supplied correctly"
			})
		}

		Meals.push({
			id: Meals[Meals.length - 1].id + 1,
			title,
			description,
			price,
			img
		});

		res.status(201).json({
			message: "Meal created successfully"
		})
	}
}

export default MealController;