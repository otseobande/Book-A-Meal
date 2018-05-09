import { Router } from 'express';
import AuthController from '../../controllers/authController';
import {
  validateLogin,
  validateSignup
} from '../../middlewares/validators/auth';

const router = Router();

router.post('/login', validateLogin, AuthController.login);
router.post('/signup', validateSignup, AuthController.signup);

export default router;
