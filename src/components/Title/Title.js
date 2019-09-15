import React from 'react';
import PropTypes from 'prop-types';

import { StyledTitle } from './styles';

export function Title({ value }) {
  return <StyledTitle>Hello {value}</StyledTitle>;
}

Title.propTypes = {
  value: PropTypes.string,
};

export default Title;
