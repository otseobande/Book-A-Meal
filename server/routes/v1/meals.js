import { Router } from 'express';
import MealController from '../../controllers/mealController';
import {
  validateCreate,
  validateMealId,
  validateUpdate
} from '../../middlewares/validators/meals';
import { authorize } from '../../middlewares';

const router = Router();

router.get('/', MealController.getMeals);
router.post('/', [authorize('caterer'), validateCreate], MealController.create);
router.get('/:mealId', validateMealId, MealController.get);
router.put('/:mealId', authorize('caterer'), validateUpdate, MealController.update);
router.delete('/:mealId', authorize('caterer'), validateMealId, MealController.delete);

export default router;
