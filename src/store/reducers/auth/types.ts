import { IUser } from "../../../models/IUser";

export interface AuthState {
    isAuth: boolean
    user: IUser
    isLoading: boolean
    error: string
}

export enum AuthActionsEnum {
    SET_AUTH = "SET_AUTH",
    SET_ERROR = "SET_ERROR",
    SET_USER = "SET_USER",
    SET_IS_LOADING = "SET_IS_LOADING"
}

interface SetAuthAction {
    type: AuthActionsEnum.SET_AUTH;
    payload: boolean
}

export type AuthAction = SetAuthAction
