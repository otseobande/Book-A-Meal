import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.status(200).json({
  message: 'Welcome to Book-A-Meal'
}));

router.all('/*', (req, res) => res.status(404).json({
  message: 'Route not found'
}));

export default router;
