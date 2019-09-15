import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../../layouts/Wrapper';
import UsernameTitle from '../../containers/UsernameTitle';
import LogoutButton from '../../containers/LogoutButton';

export function HomePage() {
  return (
    <div>
      <Link to="/admin">Admin page</Link>
      <Wrapper>
        <UsernameTitle />
        <LogoutButton />
      </Wrapper>
    </div>
  );
}

export default HomePage;
