import { UserAction, UserActionType } from "../../types/user";
import React, { Dispatch } from "react";
import axios from "axios";

export const fetchUsers: () => (dispatch: React.Dispatch<UserAction>) => Promise<void> = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionType.FETCH_USERS })
            const response = await axios.get("https://jsonplaceholder.typicode.com/users?_limiit=2")
            dispatch({
                type: UserActionType.FETCH_USERS_SUCCESS,
                payload: response.data
            })
        } catch ( e ) {
            dispatch({
                type: UserActionType.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}
