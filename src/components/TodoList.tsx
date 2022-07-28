import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {
    const {page, todos, loading, limit, error} = useTypedSelector(state => state.todo)
    const pages = [1,2,3,4,5]
    const {fetchTodos, setTodoPage} = useActions()

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>{error}</h1>
    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>{todo.id} - {todo.title}</div>
                )
            )}
            <div style={{display: "flex"}}>
                {pages.map(p =>
                    <div key={p} style={{border: p === page ? '2px solid green' : '1px solid black', padding: 10}} onClick={() => setTodoPage(p)}>{p}</div>
                )}
            </div>
        </div>
    );
};

export default TodoList;