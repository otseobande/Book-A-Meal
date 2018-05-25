import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../docs/swagger.json';

const router = Router();
const options = {
  explorer: true,
  customCss: `
    body{
      background-color: #f7f7f7;
    }
    .swagger-ui .topbar { 
      background-color: #e54310;
    }
    .swagger-ui .topbar .download-url-wrapper .download-url-button {
      background-color: #8b2809;
    }
    .swagger-ui .topbar .download-url-wrapper input[type=text]{
      border-color: #8b2809;
    }
  `
};
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

export default router;
