import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import './axiosMocks.js';
dotenv.config();

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

global.store = mockStore({})
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