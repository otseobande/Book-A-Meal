import { Router } from 'express';
import authRouter from './auth';
import mealRouter from './meals';
import menuRouter from './menu';
import orderRouter from './orders';
import docRouter from './docs';
import logRouter from './logs';

const v1router = Router();

v1router.use(
  '/v1',
  authRouter,
  mealRouter,
  menuRouter,
  orderRouter,
  docRouter,
  logRouter
);

export default v1router;
