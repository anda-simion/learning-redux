import { AGE_UP, AGE_DOWN, DELETE_ITEM } from '../actions/actionTypes';

const initialState = {
    age: 20,
    history: []
};

const ageReducer = (state = initialState, action) => {

    switch(action.type){
        case AGE_UP:
            return {
                ...state,  
                age: state.age + action.value,
                history: state.history.concat({
                    id: Math.random(), 
                    age: state.age + action.value
                })
            }
        case AGE_DOWN:
            return {
                ...state,  
                age: state.age - action.value,
                history: state.history.concat({
                    id: Math.random(), 
                    age: state.age - action.value
                })
            }
        case DELETE_ITEM:
            return {
                ...state,
                history: state.history.filter(item => item.id !== action.key)
            }
        default:
            return state;
    }
};

export default ageReducer;