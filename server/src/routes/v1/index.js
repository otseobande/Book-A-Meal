import { Router } from 'express';
import userRouter from './usersRouter.js';
import authRouter from './authRouter.js';
import mealRouter from './mealsRouter.js';
import menuRouter from './menuRouter.js';
import orderRouter from './ordersRouter.js';
import docRouter from './docsRouter.js';
import logRouter from './logsRouter.js';

const v1router = Router();

v1router.use(
  '/v1',
  authRouter,
  userRouter,
  mealRouter,
  menuRouter,
  orderRouter,
  docRouter,
  logRouter
);

export default v1router;
