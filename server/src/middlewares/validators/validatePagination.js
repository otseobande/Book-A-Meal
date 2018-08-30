import Joi from 'joi';
import validate from 'express-validation';

const validatePagination = validate({
  query: {
    limit: Joi.number().integer().min(0),
    page: Joi.number().integer().min(0)
  }
});

export default validatePagination;
