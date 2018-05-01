import express from 'express';
import MealController from '../../controllers/mealController';
import {
  validateCreate,
  validateMealId,
  validateUpdate
} from '../../middlewares/validators/meals';

const router = express.Router();

router.get('/', MealController.getMeals);
router.post('/', validateCreate, MealController.createMeal);
router.get('/:mealId', validateMealId, MealController.getMeal);
router.put('/:mealId', validateUpdate, MealController.updateMeal);
router.delete('/:mealId', validateMealId, MealController.deleteMeal);

export default router;
