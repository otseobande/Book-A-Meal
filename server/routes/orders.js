import express from 'express';
import OrderController from '../controllers/orderController';

const router = express.Router();

// These routes are to be prepended with "/orders"
router.get('/', OrderController.getAllOrders);


export default router;
