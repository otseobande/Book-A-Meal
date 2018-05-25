import { Router } from 'express';
import AuthController from '../../controllers/authController';
import {
  validateLogin,
  validateSignup
} from '../../middlewares/validators/auth';

const authRouter = Router();

authRouter.post('/auth/login', validateLogin, AuthController.login);
authRouter.post('/auth/signup', validateSignup, AuthController.signup);

export default authRouter;
