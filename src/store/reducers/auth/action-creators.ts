import { AuthActionsEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction, } from "./types";
import { IUser } from "../../../models/IUser";
import { AppDispatch } from "../../index";
import axios from "axios";

export const AuthActionCreators = {
    setUser: (payload: IUser): SetUserAction => ({ type: AuthActionsEnum.SET_USER, payload: payload }),
    setIsAuth: (payload: boolean): SetAuthAction => ({ type: AuthActionsEnum.SET_AUTH, payload: payload }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: AuthActionsEnum.SET_IS_LOADING, payload: payload }),
    setError: (payload: string): SetErrorAction => ({ type: AuthActionsEnum.SET_ERROR, payload: payload }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            setTimeout(async () => {
                dispatch(AuthActionCreators.setIsLoading(true))
                const response = await axios.get<IUser[]>("./users.json")
                const user = response.data.find(user => user.username === username && user.password === password)
                if (user) {
                    localStorage.setItem("auth", "true")
                    localStorage.setItem("username", user.username)
                    dispatch(AuthActionCreators.setIsAuth(true))
                    dispatch(AuthActionCreators.setUser(user))
                } else {
                    dispatch(AuthActionCreators.setError("Некорректный логин или пароль"))
                    dispatch(AuthActionCreators.setIsLoading(false))
                }
            }, 1000)
        } catch ( e ) {
            const _e = e as Error
            dispatch(AuthActionCreators.setError(_e.message))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {

        } catch ( e ) {
            const _e = e as Error
            dispatch(AuthActionCreators.setError(_e.message))
        }
    },
}
