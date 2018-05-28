import {
  chai,
  sinon,
  mockReq,
  mockRes
} from '../setup';
import errorHandler from '../../src/middlewares/errorHandler';

const res = mockRes();
const next = sinon.spy();
const jsonSyntaxError = () => {
  const err = new SyntaxError();
  err.status = 400;

  return err;
};

const validationError = {
  statusText: 'Bad Request',
  errors: [
    {
      messages: []
    }
  ]
};

const error = {
  stack: 'stacktrace'
};
describe('errorHandler middleware', () => {
  it('handles validation error', () => {
    errorHandler(validationError, null, res, next, 'test');

    res.status.should.have.been.calledWith(400);
    res.json.should.have.been.calledWith({
      message: [],
      status: 'error'
    });
  });

  it('handles JSON syntaxError from body-parser', () => {
    errorHandler(jsonSyntaxError(), null, res, next, 'test');

    res.status.should.have.been.calledWith(400);
    res.json.should.have.been.calledWith({
      status: 'error',
      message: 'The JSON in your request seems to be invalid.'
    });
  });

  it('should send descriptive server errors in non-prod environment', () => {
    errorHandler(error, null, res, next, 'test');

    res.status.should.have.been.calledWith(500);
    res.json.should.have.been.calledWith({
      status: 'error',
      message: error.stack
    });
  });

  it('should not send descriptive server errors in prod environment', () => {
    errorHandler(error, null, res, next, 'production');

    res.status.should.have.been.calledWith(500);
    res.json.should.have.been.calledWith({
      status: 'error',
      message: 'something went wrong'
    });
  });

  it('should return error 409 if a database conflict occurs', () => {
    const errorMock = {
      errors: [{
        path: 'meal',
        value: 1
      }
      ],
      name: 'SequelizeUniqueConstraintError'
    };
    errorHandler(errorMock, null, res, next, 'production');

    res.status.should.have.been.calledWith(409);
    res.json.should.have.been.calledWith({
      status: 'error',
      message: ['meal "1" already exists']
    });
  });
});
