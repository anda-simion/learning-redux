import { GET_USERS } from '../actions/actionTypes';

const initialState = {
    users: []
};

const usersReducers = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: state.users.concat(action.payload)
            };
        default:
            return state;
    };
};

export default usersReducers;