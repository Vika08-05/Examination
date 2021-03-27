const initialState = {
    List: [],
    CurrentToDo: "",
}
const ToDoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TODO_LIST_LOADER":
            return {
                ...state,
                List: action.payload
            }
        case "ADD_NEW_TODO":
            return {
                ...state,
                List: action.payload
            }
        case "DELETE_TODO":
            return {
                ...state,
                List: action.payload
            }
        case "SEARCH_TODO":
            if (action.payload === 0) {
                return state;
            }
            const tmpList = state.List.slice();
            let newList = tmpList.filter((item) => {
                return item.Task.toLowerCase().indexOf(action.payload.toLowerCase()) > -1;
            });
            if (newList.length === 0) {
                return {
                    ...state,
                    CurrentToDo: []
                }
            } else {
                return {
                    ...state,
                    CurrentToDo: newList
                }
            }
        default:
            return state
    }
}
export default ToDoListReducer