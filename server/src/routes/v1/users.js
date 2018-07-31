import { Router } from 'express';
import UserController from '../../controllers/userController';
import { validateEmail, validateReset } from '../../middlewares/validators/users';

const userRouter = Router();

userRouter.post('/users/reset_password', validateEmail, UserController.sendResetPasswordLink);
userRouter.put('/users/reset_password', validateReset, UserController.resetPassword);

export default userRouter;
