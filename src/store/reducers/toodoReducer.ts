import {UserAction, UserActionType, UserState} from "../../types/user";
import { TodoAction, ToDoState } from "../../types/todo";

const initialState: ToDoState = {
    users: [],
    loading: false,
    error: null
};

export const todoReducer = (state: ToDoState = initialState, action: TodoAction): ToDoState => {
    switch (action.type) {

        default:
            return state;
    }
};
