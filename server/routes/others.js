import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.status(200).json({
  status: 'success',
  message: 'Welcome to Book-A-Meal'
}));

router.all('/*', (req, res) => res.status(404).json({
  status: 'error',
  message: 'Route not found'
}));

export default router;
