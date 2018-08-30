import orderHistory from '../../src/reducers/orderHistory.js';
import { RECEIVE_ORDERS } from '../../src/actions/actionTypes.js';

const state = {
  isFetching: true,
  orders: [],
  pagination: { pageCount: 1 }
};

describe('orderHistory reducer', () => {
  it('should return initial state if type dont match any action', () => {
    const newState = orderHistory(state, {type: 'test'});

    expect(newState).toEqual(state);
  });

  it('should return state with is fetching as false on RECEIVE_ORDERS action along with other payloads', () => {
    const payload = {
      orders: ['test orders'],
      pagination: { pageCount: 2 }
    }

    const newState = orderHistory(state, {
      type: RECEIVE_ORDERS,
      ...payload
    });

    expect(newState).toEqual({
      isFetching: false,
      ...payload
    })
  })

  it('should return state with default pagination if pagination is undefined in payload', () => {
    const newState = orderHistory(state, {
      type: RECEIVE_ORDERS
    });

    expect(newState.pagination).toEqual({ pageCount: 1});
  })
})