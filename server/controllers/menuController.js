/* eslint-disable consistent-return */
import Controller from './controller';
import Menus from '../dummy-models/menus';
import MenuCategories from '../dummy-models/menuCategories';
import MealMenuCategories from '../dummy-models/mealMenuCategories';

class MenuController extends Controller{
	static createMenu(req, res){
		const { title, date, categories} = req.body;

		if(!title ||
			 !date ||
			 !categories)
		{
			return res.status(400).json({
	      status: 'error',
	      message: 'Parameters supplied incorrectly',
	    });
		}

		Menus.push({
			id: Menus[Menus.length - 1].id + 1,
			userId: 2,
			title,
			date,
		});

		categories.forEach(category => {
			MenuCategories.push({
				id: MenuCategories[MenuCategories.length - 1].id + 1,
				mealId: Menus[Menus.length - 1].id,
				title: category.title,
			});
			category.mealIds.forEach(mealId => {
				MealMenuCategories.push({
					id: MealMenuCategories[MealMenuCategories.length - 1].id + 1,
					menuCategoryId: MenuCategories[MenuCategories.length - 1].id + 1,
					mealId: mealId
				});
			});
		});

		

		return res.status(201).json({
			status: "success",
			message: "Menu created successfully",
		})
	}
}

export default MenuController;