import { Router } from 'express';
import OrderController from '../../controllers/orderController';
import {
  validateCreate,
  validateUpdate
} from '../../middlewares/validators/orders';

const router = Router();

router.get('/', OrderController.getAllOrders);
router.post('/', validateCreate, OrderController.createOrder);
router.put('/:orderId', validateUpdate, OrderController.updateOrder);

export default router;
