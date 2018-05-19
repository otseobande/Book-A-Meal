import { Router } from 'express';
import MealController from '../../controllers/mealController';
import {
  validateCreate,
  validateMealId,
  validateUpdate
} from '../../middlewares/validators/meals';
import { guard, authorize } from '../../middlewares';

const router = Router();

router.use(authorize);
router.use(guard('caterer'));
router.post('/', validateCreate, MealController.create);
router.get('/', MealController.getMeals);
router.get('/:mealId', validateMealId, MealController.get);
router.put('/:mealId', validateUpdate, MealController.update);
router.delete('/:mealId', validateMealId, MealController.delete);

export default router;
