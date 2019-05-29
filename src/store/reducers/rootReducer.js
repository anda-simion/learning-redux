import { combineReducers } from 'redux';
import age from './ageReducer';
import todos from './todoReducer';
import sum from './sumReducers';
import users from './usersReducer';

const rootReducer = combineReducers(
    {
        age,
        todos,
        sum,
        users
    }
);

export default rootReducer;