import { Router } from 'express';
import OrderController from '../controllers/orderController';
import {
  validateCreate,
  validateUpdate
} from '../middlewares/validators/orders';
import { authorize } from '../middlewares';

const router = Router();

router.use(authorize);
router.get('/orders', OrderController.getAllOrders);
router.post('/orders', validateCreate, OrderController.createOrder);
router.put('/orders/:orderId', validateUpdate, OrderController.updateOrder);

export default router;
