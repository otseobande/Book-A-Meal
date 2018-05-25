import {
  chai,
  sinon,
  mockReq,
  mockRes
} from '../setup';
import MealController from '../../controllers/mealController';

const res = mockRes();

describe('MealController', () => {
  describe('create method', () => {
    const next = sinon.spy();
    const req = mockReq({
      body: {

      },
      user: {
        id: 'asdf'
      }
    });

    it('method calls next function on err', async () => {
      try {
        await MealController.create(req, res, next);
        next.should.have.been.called;
      } catch (err) {
        throw err;
      }
    });
  });

  describe('delete method', () => {
    const next = sinon.spy();
    const req = mockReq({
      params: {
        mealId: 'asdf'
      },
      user: {
        id: 'asdf'
      }
    });

    it('method calls next function on err', async () => {
      try {
        await MealController.delete(req, res, next);
        next.should.have.been.called;
      } catch (err) {
        throw err;
      }
    });
  });

  describe('getMeal method', () => {
    const next = sinon.spy();
    const req = mockReq({
      params: {
        mealId: 'asdf'
      },
      user: {
        id: 'asdf'
      }
    });

    it('method calls next function on err', async () => {
      try {
        await MealController.getMeal(req, res, next);
        next.should.have.been.called;
      } catch (err) {
        throw err;
      }
    });

    describe('getMeals method', () => {
      const next = sinon.spy();
      const req = mockReq({
        params: {
          mealId: 'asdf'
        },
        user: {
          id: 'asdf'
        }
      });

      it('method calls next function on err', async () => {
        try {
          await MealController.getMeals(req, res, next);
          next.should.have.been.called;
        } catch (err) {
          throw err;
        }
      });
    });
  });

  describe('update method', () => {
    const next = sinon.spy();
    const req = mockReq({
      params: {
        mealId: 'asdf'
      },
      user: {
        id: 'asdf'
      }
    });

    it('method calls next function on err', async () => {
      try {
        await MealController.update(req, res, next);
        next.should.have.been.called;
      } catch (err) {
        throw err;
      }
    });
  });
});
