import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../../webpack.dev';

/**
 * Attaches middlewares for webpack dev server and Hot module reloading
 *
 * @param  {object} app - Express application
 * @param  {string} env - Current environment
 * @return {Boolean}  - status of operation
 */
const runExpressWebpackDev = (app, env) => {
  if (env === 'development') {
    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
      stats: { colors: true }
    }));

    // Hot reloading
    app.use(webpackHotMiddleware(compiler));

    return true;
  }

  return false;
};

export default runExpressWebpackDev;
