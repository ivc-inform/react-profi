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
            dispatch(AuthActionCreators.setIsLoading(true))
            const users = await axios.get("./users.json")
            console.log(users)
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
