import React from 'react';
import { chai, enzyme } from '../setup';
import Footer from '../../../src/components/shared/Footer/index.jsx';

const { render } = enzyme;

describe('Footer Component', () => {
  it('renders properly', () => {
    const tree = render(<Footer />);
    tree.should.matchSnapshot();
  });
});
