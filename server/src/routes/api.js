import { Router } from 'express';
import v1Router from './v1';

const apiRouter = Router();

apiRouter.use('/api', v1Router);

export default apiRouter;
