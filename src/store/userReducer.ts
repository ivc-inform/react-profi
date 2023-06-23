interface UserState {
    users: any[];
    loading: boolean;
    error: string | null;
}

enum UserActionType {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUserAction {
    type: UserActionType.FETCH_USERS
}

interface FetchUserSuccessAction {
    type: UserActionType.FETCH_USERS_SUCCESS
    payload: any[]
}

interface FetchUserErrorAction {
    type: UserActionType.FETCH_USERS_ERROR
    payload: string
}

type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction


const initialState: UserState = {
    users: [],
    loading: false,
    error: null
};
export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionType.FETCH_USERS:
            return {loading: true, error: null, users: []};
        case UserActionType.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload};
        case UserActionType.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []};
        default:
            return state;
    }
};