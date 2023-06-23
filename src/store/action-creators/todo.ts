import { Dispatch } from "react";
import axios from "axios";
import { TodoAction, TodoActionTypes } from "../../types/todo";

export const fetchTodos = (page: number, limit: number) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type: TodoActionTypes.FETCH_TODO })
            const response = await axios.get("https://https://jsonplaceholder.typicode.com/todos", {
                params: {
                    _page: page,
                    _limit: limit,
                }
            })
            dispatch({
                type: TodoActionTypes.FETCH_TODO_ERROR,
                payload: response.data
            })
        } catch ( e ) {
            dispatch({
                type: TodoActionTypes.FETCH_TODO_ERROR,
                payload: 'Произошла ошибка при загрузке задач'
            })
        }
    }
}
