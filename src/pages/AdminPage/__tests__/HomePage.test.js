import React from 'react';
import { render } from 'react-testing-library';

import { HomePage } from '../HomePage';

describe('HomePage', () => {
    it('should render hello', () => {
        const wrapper = render(<HomePage />);

        expect(wrapper).toEqual('lol');
    });
});
