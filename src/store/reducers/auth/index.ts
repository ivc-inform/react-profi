import { AuthAction, AuthActionsEnum, AuthState } from "./types";
import { IUser } from "../../../models/IUser";

const initialState: AuthState = {
    isAuth: false,
    error: "",
    isLoading: false,
    user: {} as IUser
}

export default function authReducer (state = initialState, action: AuthAction): AuthState {
    switch ( action.type ) {
        case AuthActionsEnum.SET_AUTH:
            return { ...state, isAuth: action.payload }
        case AuthActionsEnum.SET_ERROR:
            return {}
        case AuthActionsEnum.SET_USER:
            return {}
        case AuthActionsEnum.SET_IS_LOADING:
            return {}
        default:
            return state
    }
}
