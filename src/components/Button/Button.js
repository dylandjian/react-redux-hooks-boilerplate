import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

export function Button({ onClick, value }) {
    return <StyledButton onClick={onClick}>{value}</StyledButton>;
}

Button.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string.isRequired,
};

export default Button;
