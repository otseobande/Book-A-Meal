import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../../webpack.dev';

const clientRouter = express.Router();

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig);

  clientRouter.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true }
  }));

  // Hot reloading
  clientRouter.use(webpackHotMiddleware(compiler));
}

clientRouter.use(express.static(path.resolve(__dirname, '../../../client/dist')));

clientRouter.get('*', (_, res) => res.sendFile(path.join(__dirname, '../../../client/dist/index.html')));

clientRouter.all('*', (_, res) => res.status(404).json({
  status: 'error',
  message: 'Route not found'
}));


export default clientRouter;
