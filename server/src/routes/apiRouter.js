import { Router } from 'express';
import validatePagination from '../middlewares/validators/validatePagination.js';
import v1Router from './v1';

const apiRouter = Router();

apiRouter.use('/api', validatePagination, v1Router);

export default apiRouter;
