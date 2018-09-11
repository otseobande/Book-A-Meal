import jwt from 'jsonwebtoken';

global.userToken = jwt.sign({
  id: 'e20ac257-86cc-4a6f-a619-0249a201c475',
  role: 'admin'
}, process.env.JWT_SECRET, { expiresIn: '1h' });

global.expiredUserToken = jwt.sign({
  id: 'e20ac257-86cc-4a6f-a619-0249a201c475',
  role: 'admin'
}, process.env.JWT_SECRET, { expiresIn: '1' });