import * as types from '../../src/actions/actionTypes.js';
import * as orderActions from '../../src/actions/orders.js';

describe('order actions', () => {
  describe('editOrder action creator', () => {
    it('should return EDIT_ORDER action', () => {
      const editOrderAction = orderActions.editOrder({});

      expect(editOrderAction).toEqual({
        type: types.EDIT_ORDER,
        payload: {
          order: {}
        }
      });
    });
  });

  describe('orderPlaced action creator', () => {
    it('should return ORDER_PLACED action', () => {
      const orderPlacedAction = orderActions.orderPlaced();

      expect(orderPlacedAction).toEqual({
        type: types.ORDER_PLACED
      });
    });
  });

  describe('placeOrder action creator', () => {
    it('should dispatch ORDER_PLACED action', async () => {
      await store.dispatch(orderActions.placeOrder({}));
      const dispatchedActions = store.getActions();

      const placeOrderDispatched = dispatchedActions
        .find(action => action.type === types.ORDER_PLACED);

      expect(placeOrderDispatched).toBeTruthy();
    });
  });

  describe('fetchOrderHistory action creator', () => {
    it('should dispatch RECEIVE_ORDERS action', async () => {
      await store.dispatch(orderActions.receiveOrders());
      const dispatchedActions = store.getActions();

      const receiveOrdersDispatched = dispatchedActions
        .find(action => action.type === types.RECEIVE_ORDERS);

      expect(receiveOrdersDispatched).toBeTruthy();
    });
  });

  describe('cancelOrder action creator', () => {
    it('should dispatch EDIT_ORDER action', async () => {
      await store.dispatch(orderActions.cancelOrder({}));
      const dispatchedActions = store.getActions();

      const editOrderDispatched = dispatchedActions
        .find(action => action.type === types.EDIT_ORDER);

      expect(editOrderDispatched).toBeTruthy();
    });
  });

  describe('deliverOrder action creator', () => {
    it('should dispatch EDIT_ORDER action', async () => {
      await store.dispatch(orderActions.deliverOrder({}));
      const dispatchedActions = store.getActions();

      const editOrderDispatched = dispatchedActions
        .find(action => action.type === types.EDIT_ORDER);

      expect(editOrderDispatched).toBeTruthy();
    });
  });

  describe('updateOrder action creator', () => {
    it('should dispatch EDIT_ORDER action', async () => {
      await store.dispatch(orderActions.updateOrder({}));
      const dispatchedActions = store.getActions();

      const editOrderDispatched = dispatchedActions
        .find(action => action.type === types.EDIT_ORDER);

      expect(editOrderDispatched).toBeTruthy();
    });
  })
  afterEach(store.clearActions);
});