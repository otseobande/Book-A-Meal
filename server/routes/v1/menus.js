import express from 'express';
import MenuController from '../../controllers/menuController';

const router = express.Router();

router.post('/', MenuController.createMenu);
router.get('/', MenuController.getMenus);
router.get('/:date', MenuController.getSpecificDayMenu);
router.put('/:date', MenuController.updateMenu);
export default router;
