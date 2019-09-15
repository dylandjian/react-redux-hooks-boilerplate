import React from 'react';
import { useSelector } from 'react-redux';

import Title from '../../components/Title';

export function UsernameTitle() {
  const username = useSelector(state => state.user.username);

  return <Title value={username} />;
}

export default UsernameTitle;
