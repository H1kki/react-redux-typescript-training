import axios from "axios";
import {TodoAction, TodoTypeActions} from "../../types/todo";
import {Dispatch} from "react";


export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoTypeActions.FETCH_TODOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            dispatch({type: TodoTypeActions.FETCH_TODOS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: TodoTypeActions.FETCH_TODOS_ERROR, payload: "Error"})
        }
    }
}

export const setTodoPage = (page: number): TodoAction => {
    return {type: TodoTypeActions.SET_TODO_PAGE, payload: page}
}