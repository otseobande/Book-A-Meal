import { Router } from 'express';
import OrderController from '../controllers/orderController';
import {
  validateCreate,
  validateUpdate,
  validateOrderId
} from '../middlewares/validators/orders';
import { authorize, guard } from '../middlewares';

const router = Router();

router.use(authorize);
router.get('/orders', OrderController.getAllOrders);
router.post('/orders', validateCreate, OrderController.createOrder);
router.put('/orders/:orderId', validateUpdate, OrderController.updateOrder);

router.use(guard('caterer'));
router.put('/orders/:orderId/deliver', validateOrderId, OrderController.deliverOrder);

export default router;
