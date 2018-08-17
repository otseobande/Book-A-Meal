import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
dotenv.config();

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

global.userToken = jwt.sign({
  id: 'e20ac257-86cc-4a6f-a619-0249a201c475',
  role: 'admin'
}, process.env.JWT_SECRET, { expiresIn: '1h' });

global.expiredUserToken = jwt.sign({
  id: 'e20ac257-86cc-4a6f-a619-0249a201c475',
  role: 'admin'
}, process.env.JWT_SECRET, { expiresIn: '1' });