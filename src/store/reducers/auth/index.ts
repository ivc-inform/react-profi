import { AuthAction, AuthActionsEnum, AuthState } from "./types";

const initialState: AuthState = {
    auth: false
}

export default function authReducer (state = initialState, action: AuthAction): AuthState {
    switch ( action.type ) {
        case AuthActionsEnum.SET_AUTH:
            return { ...state, auth: action.payload }
        default:
            return state
    }
}
