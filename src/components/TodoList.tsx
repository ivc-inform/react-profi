import React, { FC, useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchTodos } from "../store/action-creators/todo";
import { useAction } from "../hooks/useAction";

export interface TodoListProps {
}

export const TodoList: FC<TodoListProps> = props => {
    const { page, error, limit, loading, todos } = useTypedSelector(state => state.todo);
    const { fetchTodos } = useAction();
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit);
    }, []);

    if (loading) {
        return <h1>Идет загрузка...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            {todos.map(todo => <div key={todo.id}>{todo.id}. {todo.title}</div>)}
            <div style={{display:'flex'}}>
                {pages.map(p=>
                    <div
                        style={{border: p === page? '2px solid red': '1px solid teal', padding : 10, cursor:'pointer'}}
                        key={p}>
                        {p}
                    </div>)}
            </div>
        </div>
    );
};
