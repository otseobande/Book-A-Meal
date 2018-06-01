import express from 'express';
import path from 'path';
import runExpressWebpackDev from '../utils/runExpressWebpackDev';

const clientRouter = express.Router();

runExpressWebpackDev(clientRouter, process.env.NODE_ENV);

clientRouter.use('/dist', express.static(path.resolve(__dirname, '../../../client/dist')));

clientRouter.get('*', (_, res) => res.sendFile(path.join(__dirname, '../../../client/dist/index.html')));

clientRouter.all('*', (_, res) => res.status(404).json({
  status: 'error',
  message: 'Route not found'
}));


export default clientRouter;
