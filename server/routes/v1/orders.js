import express from 'express';
import OrderController from '../../controllers/orderController';

const router = express.Router();

router.get('/', OrderController.getAllOrders);
router.post('/', OrderController.createOrder);
router.put('/:orderId', OrderController.updateOrder);

export default router;
