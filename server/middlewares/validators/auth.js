import Joi from 'joi';
import validate from 'express-validation';
import { User } from '../../models';

const fullName = Joi.string();
const email = Joi.string().email();
const username = Joi.string();
const password = Joi.string();
const role = Joi.string();


const validateSignUpReqBody = validate({
    body: {
      fullName: fullName.required(),
      email: email.required(),
      username: username.required(),
      password: password.required(),
      role: role.required()
    }
});

const validateRole = (req, res, next) => {
  const roles = ['caterer', 'customer', 'admin'];

  if (!roles.includes(req.body.role)) {
    return res.status(400).json({
      status: false,
      message: 'role does not exist'
    });
  }

  next();
}


const checkIfUserExists = async (req, res, next) => {
  try{
    const {username, email} = req.body;

    const emailTaken = await User.find({where: {email}});
    const usernameTaken = await User.find({where: {username}})
   
    if(emailTaken){
      return res.status(400).json({
        status: false,
        message: "Email is already in use"
      })
    }

    if(usernameTaken){
      return res.status(400).json({
        status: false,
        message: "Username is taken"
      })
    }

    next();
  }catch(err){
    next(err)
  } 
}

const validateSignup = [ 
  validateSignUpReqBody,
  validateRole, 
  checkIfUserExists
];
 
const validateLogin = validate({
  body: {
    username: username.required(),
    password: password.required()
  }
});


export {
  validateSignup,
  validateLogin
}

