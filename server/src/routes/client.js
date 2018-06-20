import { Router } from 'express';
import path from 'path';
import gzipStatic from 'connect-gzip-static';
import runExpressWebpackDev from '../utils/runExpressWebpackDev';

const clientRouter = Router();

runExpressWebpackDev(clientRouter, process.env.NODE_ENV);

const clientAssetPath = path.resolve(__dirname, '../../../client/dist');

clientRouter.use(gzipStatic(clientAssetPath));

clientRouter.get('*', (_, res) => res.sendFile(`${clientAssetPath}/index.html`));

clientRouter.all('*', (_, res) => res.status(404).json({
  status: 'error',
  message: 'Route not found'
}));

export default clientRouter;
