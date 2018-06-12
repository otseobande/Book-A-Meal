import React from 'react';
import { chai, enzyme } from '../setup';
import Loader from '../../../src/components/shared/Loader.jsx';

const { render } = enzyme;

describe('Loader Component', () => {
  it('renders properly', () => {
    const tree = render(<Loader/>);
    tree.should.matchSnapshot();
  });
});
