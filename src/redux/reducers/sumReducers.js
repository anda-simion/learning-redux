import { UPDATE_A, UPDATE_B, RESET_SUM } from '../actions/actionTypes';

const initialState = {
    a: 1,
    b: 1,
    reset: false
};

const sumReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_A:
            return {
                ...state,
                a: state.a + action.valueB,
                b: state.b,
                reset: false
            };
        case UPDATE_B:
            return {
                ...state,
                a: state.a,
                b: state.b + action.valueA,
                reset: false
            };
        case RESET_SUM:
            return {
                ...state,
                a: 1, 
                b: 1,
                reset: true
            }
        default: 
            return state
    }
};

export default sumReducer;