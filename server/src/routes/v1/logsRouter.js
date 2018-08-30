import { Router } from 'express';
import logger from '../../utils/logger';
// import winston from 'winston';
import validateLog from '../../middlewares/validators/log';

const logRouter = Router();

logRouter.post('/logs', validateLog, (req, res) => {
  logger.error(req.body.data);

  res.status(200).json({
    status: 'success',
    message: 'Log saved successfully'
  });
});

export default logRouter;
