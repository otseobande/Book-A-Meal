import express from 'express';
import MenuController from '../controllers/menuController';

const router = express.Router();

// These routes are to be prepended with "/menu"s
router.post('/', MenuController.createMenu);

router.get('/', MenuController.getMenus);

// router.get('/:menuId', () => {});

// router.put('/:menuId', () => {});

// router.delete('/:menuId', () => {});

export default router;
