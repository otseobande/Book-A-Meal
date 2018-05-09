import { Router } from 'express';
import MenuController from '../../controllers/menuController';
import {
  validateCreate,
  validateUpdate,
  validateDate
} from '../../middlewares/validators/menu';
import { guard } from '../../middlewares';

const router = Router();

router.get('/', MenuController.getSpecificDayMenu);
router.get('/all', MenuController.getMenus);
router.get('/:date', validateDate, MenuController.getSpecificDayMenu);

router.use(guard('caterer'));
router.post('/', validateCreate, MenuController.createMenu);
router.put('/:date', validateUpdate, MenuController.updateMenu);
router.delete('/:date', validateDate, MenuController.deleteMenu);

export default router;
