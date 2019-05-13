import React from 'react';
import { render } from 'react-testing-library';

import { MainPage } from '../MainPage';

describe('MainPage', () => {
    it('should render hello', () => {
        const wrapper = render(<MainPage />);

        expect(wrapper).toEqual('lol');
    });
});
