import React, { FC } from "react";
import { useSelector } from "react-redux";
import { UserState } from "../types/user";
import { useTypedSelector } from "../hooks/useTypedSelector";

export interface UserListProps {
}

export const UserList: FC<UserListProps> = props => {
    const { users, error, loading } = useTypedSelector(state => state.user)

    return (
        <>
        </>
    )
};
