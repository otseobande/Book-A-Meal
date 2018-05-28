import { Router } from 'express';
import MenuController from '../../controllers/menuController';
import {
  validateCreate,
  validateUpdate,
  validateDate
} from '../../middlewares/validators/menu';
import { guard, authorize } from '../../middlewares';

const menuRouter = Router();

menuRouter.get('/menu', MenuController.getSpecificDayMenu);

menuRouter.use('/menu', authorize);
menuRouter.get('/menu/:date', validateDate, MenuController.getSpecificDayMenu);

menuRouter.use('/menu', guard('caterer'));
menuRouter.post('/menu', validateCreate, MenuController.createMenu);
menuRouter.put('/menu/:date', validateUpdate, MenuController.updateMenu);
menuRouter.delete('/menu/:date', validateDate, MenuController.deleteMenu);

export default menuRouter;
