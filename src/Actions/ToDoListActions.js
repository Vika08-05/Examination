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

export const searchToDo = (ToDo) => {
    return {
        type: "SEARCH_TODO",
        payload: ToDo
    }
}

export const editToDo = (CurrentToDo) => {
    return {
        type: "EDIT_TODO",
        payload: CurrentToDo
    }
}
