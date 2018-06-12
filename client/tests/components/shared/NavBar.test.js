import React from 'react';
import { chai, enzyme } from '../setup';
import NavBar from '../../../src/components/shared/NavBar/index.jsx';

const { shallow } = enzyme;

describe('NavBar Component', () => {
  it('renders properly', () => {
    const tree = shallow(<NavBar />);
    tree.should.matchSnapshot();
  });
});
