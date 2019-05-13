import React from 'react';
import { useSelector } from 'react-redux';

import Title from '../../components/Title';

export function TitleContainer() {
    const value = useSelector(state => state.title);

    return <Title value={value} />;
}

export default TitleContainer;
