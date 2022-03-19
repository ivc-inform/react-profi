import { AuthActionsEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction, } from "./types";
import { IUser } from "../../../models/IUser";

export const AuthActionCreators = {
    setUser: (payload: IUser): SetUserAction => ({ type: AuthActionsEnum.SET_USER, payload: payload }),
    setIsAuth: (payload: boolean): SetAuthAction => ({ type: AuthActionsEnum.SET_AUTH, payload: payload }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: AuthActionsEnum.SET_IS_LOADING, payload: payload }),
    setError: (payload:string): SetErrorAction => ({ type: AuthActionsEnum.SET_ERROR, payload: payload }),
}
