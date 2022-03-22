/** @format */

import { AuthActionsEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types";
import { IUser } from "../../../models/IUser";
import { AppDispatch } from "../../index";
import UserService from "../../../api/UserService";

export const AuthActionCreators = {
    setUser: (payload: IUser): SetUserAction => ({ type: AuthActionsEnum.SET_USER, payload: payload }),
    setIsAuth: (payload: boolean): SetAuthAction => ({ type: AuthActionsEnum.SET_AUTH, payload: payload }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: AuthActionsEnum.SET_IS_LOADING, payload: payload }),
    setError: (payload: string): SetErrorAction => ({ type: AuthActionsEnum.SET_ERROR, payload: payload }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            setTimeout(async () => {
                dispatch(AuthActionCreators.setIsLoading(true));
                const response = await UserService.getUsers()
                const user = response.data.find(user => user.username === username && user.password === password);
                if (user) {
                    localStorage.setItem("auth", "true");
                    localStorage.setItem("username", user.username);
                    dispatch(AuthActionCreators.setUser(user));
                    dispatch(AuthActionCreators.setIsAuth(true));
                } else {
                    dispatch(AuthActionCreators.setError("Некорректный логин или пароль"));
                }
                dispatch(AuthActionCreators.setIsLoading(false));
            }, 1000);
        } catch ( e ) {
            const _e = e as Error;
            dispatch(AuthActionCreators.setError(_e.message));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem("auth");
        localStorage.removeItem("username");
        dispatch(AuthActionCreators.setIsAuth(false));
        dispatch(AuthActionCreators.setUser({} as IUser));
    }
};
