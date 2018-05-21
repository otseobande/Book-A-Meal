import { Router } from 'express';
import authRoutes from './auth';
import mealRoutes from './meals';
import menuRoutes from './menu';
import orderRoutes from './orders';

const router = Router();


router.use(
  '/api/v1',
  authRoutes,
  orderRoutes,
  menuRoutes,
  mealRoutes
);

export default router;
