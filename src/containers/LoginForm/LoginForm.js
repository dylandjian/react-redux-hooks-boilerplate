import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { StyledDiv } from './styles';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch({ type: 'UPDATE_USERNAME', username });
    dispatch({ type: 'UPDATE_LOGIN_STATUS', value: true });
  }, [username, dispatch]);

  return (
    <StyledDiv>
      <Input placeholder="This is a placeholder" onChange={setUsername} />
      <Button onClick={handleClick} value="Send your infos !" />
    </StyledDiv>
  );
}

export default LoginForm;
