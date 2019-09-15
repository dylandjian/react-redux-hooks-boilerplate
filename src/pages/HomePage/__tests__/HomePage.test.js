import React from 'react';
import { render } from '@testing-library/react';

import { HomePage } from '../HomePage';

describe('HomePage', () => {
  it('should render hello', () => {
    const wrapper = render(<HomePage />);

    expect(wrapper).toEqual('lol');
  });
});
