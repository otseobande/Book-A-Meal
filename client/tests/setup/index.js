import dotenv from 'dotenv';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router'

import './mockStore.js';
import './axiosMocks.js';
import './tokens.js';

dotenv.config();

Enzyme.configure({ adapter: new Adapter() });

global.Provider = Provider;
global.MemoryRouter = MemoryRouter;
global.shallow = shallow;
global.render = render;
global.mount = mount;
