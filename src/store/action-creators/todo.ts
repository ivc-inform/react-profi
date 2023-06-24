import { Dispatch } from "react";
import axios from "axios";
import { TodoAction, TodoActionTypes } from "../../types/todo";

export const fetchTodos = (page: number = 1, limit: number = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type: TodoActionTypes.FETCH_TODO })
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
                params: {
                    _page: page,
                    _limit: limit,
                }
            })
            dispatch({
                type: TodoActionTypes.FETCH_TODO_SUCCESS,
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

export function setTodoPage (page: number): TodoAction {
    return { type: TodoActionTypes.SET_TODO_PAGE, payload: page }
}
