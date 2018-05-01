import express from 'express';
import MenuController from '../../controllers/menuController';
import {
  validateCreate,
  validateUpdate,
  validateDate
} from '../../middlewares/validators/menu';

const router = express.Router();

router.post('/', validateCreate, MenuController.createMenu);
router.get('/', MenuController.getTodaysMenu);
router.get('/all', MenuController.getMenus);
router.get('/:date', validateDate, MenuController.getSpecificDayMenu);
router.put('/:date', validateUpdate, MenuController.updateMenu);
router.delete('/:date', validateDate, MenuController.deleteMenu);

export default router;
