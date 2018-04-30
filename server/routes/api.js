import express from 'express';
import v1Routes from './v1';

const router = express.Router();
const prefix = 'api';

router.use(`/${prefix}`, v1Routes);

export default router;
