import express from 'express';
import MenuController from '../../controllers/menuController';

const router = express.Router();

router.get('/', MenuController.getTodaysMenu);
router.post('/', MenuController.createMenu);

export default router;
