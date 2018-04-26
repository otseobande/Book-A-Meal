import express from 'express';
import MenuController from '../controllers/menuController';

const router = express.Router();

// These routes are to be prepended with "/menus"
// router.post('/', MenuController.createTodaysMenu);

router.get('/', MenuController.getTodaysMenu);

router.post('/', MenuController.createMenu);

export default router;
