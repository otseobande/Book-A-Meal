import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Layout from '../../components/Layout/Layout.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Layout component', () => {
  it('should match snapshot', () => {
  
  })
})