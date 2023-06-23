import React, { FC, useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchTodos } from "../store/action-creators/todo";
import { useAction } from "../hooks/useAction";

export interface TodoListProps {
}

export const TodoList: FC<TodoListProps> = props => {
    const { page, error, limit, loading, todos } = useTypedSelector(state => state.todo)
    const {fetchTodos} =  useAction()

    useEffect(() => {
        fetchTodos(page, limit)
    }, []);

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{ error }</h1>
    }

    return (
        <>
            { todos.map(todo => <div key={ todo.id }>{ todo.id }. { todo.title }</div>) }
        </>
    )
};
