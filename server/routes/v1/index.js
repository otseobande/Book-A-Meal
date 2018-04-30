import express from 'express';
import MenuRoutes from './menu';
import MenusRoutes from './menus';
import MealsRoutes from './meals';
import OrderRoutes from './orders';

const router = express.Router();
const prefix = 'v1';

router.use(`/${prefix}/menu`, MenuRoutes);
router.use(`/${prefix}/menus`, MenusRoutes);
router.use(`/${prefix}/meals`, MealsRoutes);
router.use(`/${prefix}/orders`, OrderRoutes);

export default router;
