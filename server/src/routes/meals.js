import { Router } from 'express';
import MealController from '../controllers/mealController';
import {
  validateCreate,
  validateMealId,
  validateUpdate
} from '../middlewares/validators/meals';
import { guard, authorize } from '../middlewares';

const router = Router();

router.use(authorize);
router.use(guard('caterer'));
router.post('/meals', validateCreate, MealController.create);
router.get('/meals', MealController.getMeals);
router.get('/meals/:mealId', validateMealId, MealController.getMeal);
router.put('/meals/:mealId', validateUpdate, MealController.update);
router.delete('/meals/:mealId', validateMealId, MealController.delete);

export default router;
