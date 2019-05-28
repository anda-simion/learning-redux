import { combineReducers } from 'redux';
import ageReducer from './ageReducer';
import todoReducer from './todoReducer';
import sumReducer from './sumReducers';

const rootReducer = combineReducers(
    {
        age: ageReducer,
        todos: todoReducer,
        sum: sumReducer
    }
);

export default rootReducer;