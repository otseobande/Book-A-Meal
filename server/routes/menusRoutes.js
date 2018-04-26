import express from 'express';
import MenuController from '../controllers/menuController';

const router = express.Router();

// These routes are to be prepended with "/menus"
router.post('/', MenuController.createMenu);

router.get('/', MenuController.getMenus);

router.get('/:date', MenuController.getSpecificDayMenu);

// router.put('/:menuId', () => {});

// router.delete('/:menuId', () => {});

export default router;
