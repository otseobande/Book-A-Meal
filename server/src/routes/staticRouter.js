import { Router } from 'express';
import path from 'path';
import gzipStatic from 'connect-gzip-static';
import runExpressWebpackDev from '../utils/runExpressWebpackDev';

const staticRouter = Router();

runExpressWebpackDev(staticRouter, process.env.NODE_ENV);

const staticAssetPath = path.resolve(__dirname, '../../../client/dist');

staticRouter.use(gzipStatic(staticAssetPath));

staticRouter.get('*', (_, res) => res.sendFile(`${staticAssetPath}/index.html`));

staticRouter.all('*', (_, res) => res.status(404).json({
  status: 'error',
  message: 'Route not found'
}));

export default staticRouter;
