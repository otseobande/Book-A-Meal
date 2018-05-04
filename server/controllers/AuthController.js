import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import users from '../dummy-models/users';
import config from '../config';
import { User } from '../models';

const secret = config.jwtSecret;

/**
 * @exports
 * @class AuthController
 */
class AuthController {
  /**
   * Authenticates users
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static login(req, res) {
    const { username, password } = req.body;

    const findUser = User.find({where: {
        username
      }
    })

    const validatePassword = findUser.then(user => 
                        bcrypt.compare(password, user.password));

    Promise.all([findUser, validatePassword]).then(values =>{
      const [user, passwordValid] = values;

      if(user && passwordValid){
        const token = jwt.sign({
          fullName: user.fullName,
          username: user.username,
          email: user.email,
          role: user.role
        }, secret);

        return res.status(200).json({
          status: true,
          token
        })
      }
    }).then(()=>{
      return res.status(400).json({
        status: false,
        message: 'Please check your credentails'
      })
    }).catch(err =>{
      return res.status(500).json({
        status: false,
        error: err.stack
      })
    })
  }

  /**
   * Creates new users
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static signup(req, res) {
    const {
      fullName, 
      username, 
      email, 
      password,
      role
    } = req.body;
   

    User.create({
      fullName,
      username,
      email,
      password: bcrypt.hashSync(password, 10),
      role
    }).then(user => {
      return res.status(201).json({
        status: true,
        message: 'User signup successful'
      });
    }).catch(err =>{
      //
    })

  }
}

export default AuthController;