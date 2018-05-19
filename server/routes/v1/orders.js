import { Router } from 'express';
import OrderController from '../../controllers/orderController';
import {
  validateCreate,
  validateUpdate
} from '../../middlewares/validators/orders';

const router = Router();

router.post('/', validateCreate, OrderController.createOrder);
router.put('/:orderId', validateUpdate, OrderController.updateOrder);
router.get('/', OrderController.getAllOrders);

export default router;
