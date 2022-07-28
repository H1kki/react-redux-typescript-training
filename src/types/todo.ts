export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoTypeActions {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface FetchTodos {
    type: TodoTypeActions.FETCH_TODOS
}
interface FetchTodosSuccess {
    type: TodoTypeActions.FETCH_TODOS_SUCCESS;
    payload: any[]
}
interface FetchTodosError {
    type: TodoTypeActions.FETCH_TODOS_ERROR;
    payload: string
}
interface SetTodoPage {
    type: TodoTypeActions.SET_TODO_PAGE;
    payload: number
}

export type TodoAction = FetchTodos | FetchTodosSuccess | FetchTodosError | SetTodoPage