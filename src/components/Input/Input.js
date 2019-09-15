import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from './styles';

export function Input({ placeholder, onChange }) {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      onChange={({ target: { value } }) => {
        onChange(value);
      }}
    />
  );
}

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Input;
