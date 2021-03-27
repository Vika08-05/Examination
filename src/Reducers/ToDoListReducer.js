const initialState = {
    List: [ ],
    CurrentToDo:"",
}
const ToDoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TODO_LIST_LOADER":
            return {
                List: action.payload
            }
        case "ADD_NEW_TODO":
            return {
                List: action.payload
            }
        case "DELETE_TODO":
            return {
                List: action.payload
            }
        default:
            return state
    }
}
export default ToDoListReducer