import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../../layouts/Wrapper';

export function AdminPage() {
    return (
        <div>
            <Link to="/">Home page</Link>
            <Wrapper>
                <span>This is the Admin page</span>
            </Wrapper>
        </div>
    );
}

export default AdminPage;
