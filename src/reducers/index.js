import { combineReducers } from 'redux';

import user from './user';
import friends from './friends';

const reducers = combineReducers({ friends, user });

export default reducers;
