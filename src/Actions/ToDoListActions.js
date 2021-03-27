export const getAllToDo = (ToDoList) => {
    return {
        type: "TODO_LIST_LOADER",
        payload: ToDoList
    }
}

export const addNewToDo = (ToDoList) => {
    return {
        type: "ADD_NEW_TODO",
        payload: ToDoList
    }
}

export const deleteToDo = (ToDoList) => {
    return {
        type: "DELETE_TODO",
        payload: ToDoList
    }
}
