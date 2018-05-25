import { Router } from 'express';
import OrderController from '../../controllers/orderController';
import {
  validateCreate,
  validateUpdate,
  validateOrderId
} from '../../middlewares/validators/orders';
import { authorize, guard } from '../../middlewares';

const orderRouter = Router();

orderRouter.use('/orders', authorize);

orderRouter.get('/orders', OrderController.getAllOrders);
orderRouter.post('/orders', validateCreate, OrderController.createOrder);
orderRouter.put('/orders/:orderId', validateUpdate, OrderController.updateOrder);

orderRouter.use('/orders', guard('caterer'));

orderRouter.put('/orders/:orderId/deliver', validateOrderId, OrderController.deliverOrder);

export default orderRouter;
