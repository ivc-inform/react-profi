import React, { FC, useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAction } from "../hooks/useAction";

export interface UserListProps {
}

export const UserList: FC<UserListProps> = props => {
    const { users, error, loading } = useTypedSelector(state => state.user)
    const { fetchUsers } = useAction()

    useEffect(() => {
        fetchUsers()
    }, []);

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{ error }</h1>
    }


    return (
        <>
            { users.map(user => <div key={ user.id }>{ user.id }. { user.name }</div>) }
        </>
    )
};
