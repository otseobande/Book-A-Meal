import {
  chai,
  sinon,
} from '../setup';
import runExpressWebpackDev from '../../src/utils/runExpressWebpackDev';

const app = {
  use: sinon.spy()
}
describe('runExpressWebpackDev function', () => {
  beforeEach(() => {
    app.use.resetHistory();
  });

  it('should use webpack dev middleware in development', () => {
    runExpressWebpackDev(app, 'development').should.be.true;
    app.use.should.have.been.called;
  })

  it('should return false and not load middleware in production', () => {
    runExpressWebpackDev(app, 'production').should.be.false;
    app.use.should.not.have.been.called;
  })
})