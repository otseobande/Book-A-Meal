import { Router } from 'express';
import MenuController from '../controllers/menuController';
import {
  validateCreate,
  validateUpdate,
  validateDate
} from '../middlewares/validators/menu';
import { guard, authorize } from '../middlewares';

const router = Router();

router.use(authorize);
router.get('/menu', MenuController.getSpecificDayMenu);
router.get('/menu/:date', validateDate, MenuController.getSpecificDayMenu);

router.use(guard('caterer'));
router.post('/menu', validateCreate, MenuController.createMenu);
router.put('/menu/:date', validateUpdate, MenuController.updateMenu);
router.delete('/menu/:date', validateDate, MenuController.deleteMenu);

export default router;
