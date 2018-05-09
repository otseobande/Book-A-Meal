import { Router } from 'express';
import OrderController from '../../controllers/orderController';
import {
  validateCreate,
  validateUpdate
} from '../../middlewares/validators/orders';
import { guard } from '../../middlewares';

const router = Router();

router.post('/', validateCreate, OrderController.createOrder);
router.put('/:orderId', validateUpdate, OrderController.updateOrder);

router.use(guard('caterer'));
router.get('/', OrderController.getAllOrders);

export default router;
