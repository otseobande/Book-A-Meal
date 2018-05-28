import { Router } from 'express';
import MealController from '../../controllers/mealController';
import {
  validateCreate,
  validateMealId,
  validateUpdate
} from '../../middlewares/validators/meals';
import { guard, authorize } from '../../middlewares';

const mealRouter = Router();

mealRouter.use('/meals', authorize, guard('caterer'));

mealRouter.post('/meals', validateCreate, MealController.create);
mealRouter.get('/meals', MealController.getMeals);
mealRouter.get('/meals/:mealId', validateMealId, MealController.getMeal);
mealRouter.put('/meals/:mealId', validateUpdate, MealController.update);
mealRouter.delete('/meals/:mealId', validateMealId, MealController.delete);

export default mealRouter;
