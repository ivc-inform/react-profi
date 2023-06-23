import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoReducer } from "./toodoReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>
