import { Router } from 'express';
import MenuController from '../../controllers/menuController';
import {
  validateCreate,
  validateUpdate,
  validateDate
} from '../../middlewares/validators/menu';
import { authorize } from '../../middlewares';

const router = Router();

router.post('/', validateCreate, MenuController.createMenu);
router.get('/', MenuController.getTodaysMenu);
router.get('/all', MenuController.getMenus);
router.get('/:date', validateDate, MenuController.getSpecificDayMenu);
router.put('/:date', authorize('caterer'), validateUpdate, MenuController.updateMenu);
router.delete('/:date',authorize('caterer'), validateDate, MenuController.deleteMenu);

export default router;
