export const ageUp = (val) => (
    {
        type:'AGE_UP', 
        value: val
    }
);

export const ageDown = (val) => (
    {
        type:'AGE_DOWN', 
        value: val
    }
);

export const deleteItem = (id) => (
    {
        type: 'DELETE_ITEM',
        key: id
    }
);

export const createToDo = (todoName) => (
    {
        type: 'CREATE_TODO',
        todoName: todoName
    }
);

export const deleteToDo = (todoId) => (
    {
        type: 'DELETE_TODO',
        todoId: todoId
    }
);

export const updateA = (b) => (
    {
        type: "UPDATE_A",
        valueB: b
    }
);

export const updateB = (a) => (
    {
        type: "UPDATE_B",
        valueA: a
    }
);

export const resetSum = (bool) => (
    {
        type: "RESET_SUM",
        payload: bool
    }
);