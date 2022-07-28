import {TodoAction, TodoState, TodoTypeActions} from "../../types/todo";

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoTypeActions.FETCH_TODOS:
            return {...state, loading: true}
        case TodoTypeActions.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TodoTypeActions.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case TodoTypeActions.SET_TODO_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}