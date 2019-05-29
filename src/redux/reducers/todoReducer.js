import { CREATE_TODO, DELETE_TODO } from '../actions/actionTypes';
import uuidv1 from "uuid";

const initialState = {
    todos: []
};

const todoReducer = (state=initialState, action) => {
    switch(action.type) {
        case CREATE_TODO:
            return {
                ...state,
                todos: state.todos.concat({
                    todoName:action.todoName,
                    id: uuidv1()
                })
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.todoId)
            };
        default:
            return state;
    }
};

export default todoReducer;