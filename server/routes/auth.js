import { Router } from 'express';
import AuthController from '../controllers/authController';
import {
  validateLogin,
  validateSignup
} from '../middlewares/validators/auth';

const router = Router();

router.post('/auth/login', validateLogin, AuthController.login);
router.post('/auth/signup', validateSignup, AuthController.signup);

export default router;
