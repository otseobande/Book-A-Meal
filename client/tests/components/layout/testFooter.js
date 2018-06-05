import React from 'react';
import chai from 'chai';
import enzyme, { render } from 'enzyme';
import chaiJestSnapshot from 'chai-jest-snapshot';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../../../src/components/layout/Footer.jsx';

enzyme.configure({ adapter: new Adapter() });
chai.use(chaiJestSnapshot);
chai.should();

before(() => {
  chaiJestSnapshot.resetSnapshotRegistry();
});

beforeEach(() => {
  chaiJestSnapshot.configureUsingMochaContext(this);
});

describe('Footer Component', () => {
  it('renders properly', () => {
    const tree = render(<Footer />);
    tree.should.matchSnapshot();
  });
});
