import { Router } from 'express';
import MenuRoutes from './menu';
import MealsRoutes from './meals';
import OrderRoutes from './orders';
import AuthRoutes from './auth';
import { authorize } from '../../middlewares';

const router = Router();

router.use('/v1/menu', authorize(), MenuRoutes);
router.use('/v1/meals', authorize(), MealsRoutes);
router.use('/v1/orders', authorize(), OrderRoutes);
router.use('/v1/auth', AuthRoutes);

export default router;
