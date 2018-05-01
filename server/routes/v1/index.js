import express from 'express';
import MenuRoutes from './menu';
import MealsRoutes from './meals';
import OrderRoutes from './orders';

const router = express.Router();

router.use('/v1/menu', MenuRoutes);
router.use('/v1/meals', MealsRoutes);
router.use('/v1/orders', OrderRoutes);

export default router;
