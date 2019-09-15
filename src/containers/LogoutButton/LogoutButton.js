import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button';

export function LogoutButton() {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch({ type: 'LOGOUT' });
  }, [dispatch]);

  return <Button onClick={handleClick} value="Logout" />;
}

export default LogoutButton;
