import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument '../docs/swagger.json';

const router = Router();

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
