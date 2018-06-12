import React from 'react';
import chai from 'chai';
import enzyme, { render } from 'enzyme';
import chaiJestSnapshot from 'chai-jest-snapshot';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
chai.use(chaiJestSnapshot);
chai.should();

before(() => {
  chaiJestSnapshot.resetSnapshotRegistry();
});

beforeEach(function () {
  chaiJestSnapshot.configureUsingMochaContext(this);
});

export {
  chai,
  enzyme
}