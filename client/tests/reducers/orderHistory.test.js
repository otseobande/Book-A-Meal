import orderHistory from '../../src/reducers/orderHistory.js';
import { RECEIVE_ORDERS, EDIT_ORDER } from '../../src/actions/actionTypes.js';

const state = {
  isFetching: true,
  orders: [{
    id: '3482934',
    status: 'pending'
  }, {
    id: '5389434',
    status: 'pending'
  }],
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
      payload
    });

    expect(newState).toEqual({
      isFetching: false,
      ...payload
    })
  })

  it('should return state with default pagination if pagination is undefined in payload', () => {
    const newState = orderHistory(state, {
      type: RECEIVE_ORDERS,
      payload: {
        orders: []
      }
    });

    expect(newState.pagination).toEqual({ pageCount: 1});
  });

  it('should return state with update order on EDIT_ORDER action', () => {
    const updatedOrder = {
      id: '3482934',
      status: 'delivered'
    }
    const newState = orderHistory(state, {
      type: EDIT_ORDER,
      payload: {
        order: updatedOrder
      }
    });

    expect(newState.orders).toContain(updatedOrder);
  })
})