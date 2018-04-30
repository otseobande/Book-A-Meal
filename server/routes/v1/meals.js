import express from 'express';
import MealController from '../../controllers/mealController';

const router = express.Router();

router.get('/', MealController.getMeals);
router.post('/', MealController.createMeal);
router.get('/:mealId', MealController.getMeal);
router.put('/:mealId', MealController.updateMeal);
router.delete('/:mealId', MealController.deleteMeal);

export default router;
