import Joi from 'joi';
import validate from 'express-validation';

export default validate({
  body: {
    data: Joi.any().required()
  }
});
