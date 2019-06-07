import * as types from './actionTypes';

export const ageUp = (val) => (
    {
        type: types.AGE_UP, 
        value: val
    }
);

export const ageDown = (val) => (
    {
        type: types.AGE_DOWN, 
        value: val
    }
);

export const deleteItem = (id) => (
    {
        type: types.DELETE_ITEM,
        key: id
    }
);

export const createToDo = (todoName) => (
    {
        type: types.CREATE_TODO,
        todoName: todoName
    }
);

export const deleteToDo = (todoId) => (
    {
        type: types.DELETE_TODO,
        todoId: todoId
    }
);

export const updateA = (b) => (
    {
        type: types.UPDATE_A,
        valueB: b
    }
);

export const updateB = (a) => (
    {
        type: types.UPDATE_B,
        valueA: a
    }
);

export const resetSum = (bool) => (
    {
        type: types.RESET_SUM,
        payload: bool
    }
);

export const getUsers = () => {
    return (dispatch) => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(users => {
          dispatch({
            type: types.GET_USERS,
            payload: users
          })
        })
    }
};

