/** @format */

import React, { FC } from "react";
import { Layout, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { RouteName } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

export interface NavbarProps {}

export const Navbar: FC<NavbarProps> = props => {
    const navigate = useNavigate();
    const { logout } = useActions();
    const { user } = useTypedSelector(state => state.auth);

    const { isAuth } = useTypedSelector(state => state.auth);

    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth ? (
                    <>
                        <div style={{ color: "white" }}>{user.username}</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item key={1} onClick={logout}>
                                Выйти
                            </Menu.Item>
                        </Menu>
                    </>
                ) : (
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item key={1} onClick={() => navigate(RouteName.LOGIN)}>
                            Логин
                        </Menu.Item>
                    </Menu>
                )}
            </Row>
        </Layout.Header>
    );
};
