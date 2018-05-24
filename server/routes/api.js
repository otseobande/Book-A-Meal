import { Router } from 'express';
import authRoutes from './auth';
import mealRoutes from './meals';
import menuRoutes from './menu';
import orderRoutes from './orders';
import docRoutes from './docs';
import logRoutes from './log';

const router = Router();


router.use(
  '/api/v1',
  logRoutes,
  docRoutes,
  authRoutes,
  orderRoutes,
  menuRoutes,
  mealRoutes,
);

export default router;
