import express from 'express';
import MenuRoutes from './menu';
import MenusRoutes from './menus';
import MealsRoutes from './meals';

const router = express.Router();
const prefix = 'v1';

router.use(`/${prefix}/menu`, MenuRoutes);
router.use(`/${prefix}/menus`, MenusRoutes);
router.use(`/${prefix}/meals`, MealsRoutes);

export default router;

