import { Router } from 'express';
import OrderController from '../../controllers/orderController';
import {
  validateCreate,
  validateUpdate,
  validateExpiry,
  validateOrderId
} from '../../middlewares/validators/orders';
import { authorize, guard } from '../../middlewares';

const orderRouter = Router();

orderRouter.use('/orders', authorize);
orderRouter.get('/orders', OrderController.getAllOrders);
orderRouter.post('/orders', validateCreate, OrderController.createOrder);
orderRouter.put('/orders/:orderId', validateUpdate, OrderController.updateOrder);
orderRouter.put('/orders/:orderId/cancel', validateExpiry, OrderController.cancelOrder);
orderRouter.put(
  '/orders/:orderId/deliver',
  guard('caterer'),
  validateOrderId,
  OrderController.deliverOrder
);

export default orderRouter;
