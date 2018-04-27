import express from 'express';
import OrderController from '../controllers/orderController';

const router = express.Router();

// These routes are to be prepended with "/orders"
router.get('/', OrderController.getAllOrders);
router.post('/', OrderController.createOrder);


export default router;
