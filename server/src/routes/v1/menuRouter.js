import { Router } from 'express';
import MenuController from '../../controllers/menuController';
import {
  validateCreate,
  validateUpdate,
  validateDate
} from '../../middlewares/validators/menu';
import { guard, authorize } from '../../middlewares';

const menuRouter = Router();

menuRouter.get('/menu/peep', MenuController.peepIntoTodaysMenus);

menuRouter.use('/menu', authorize);
menuRouter.get('/menu', MenuController.getSpecificDayMenu);
menuRouter.get('/menu/:date', validateDate, MenuController.getSpecificDayMenu);

menuRouter.use('/menu', guard('caterer'));
menuRouter.get('/menus', authorize, guard('caterer'), MenuController.getMenus);
menuRouter.post('/menu', validateCreate, MenuController.createMenu);
menuRouter.put('/menu/:date', validateUpdate, MenuController.updateMenu);
menuRouter.delete('/menu/:date', validateDate, MenuController.deleteMenu);

export default menuRouter;
