import React, { FC } from "react";
import { useSelector } from "react-redux";
import { UserState } from "../types/user";

export interface UserListProps {
}

export const UserList: FC<UserListProps> = props => {
    const state = useSelector<UserState>(state => state)
    console.log(state)

    return (
        <>
        </>
    )
};
