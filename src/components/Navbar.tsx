import React, { FC } from "react";
import { Layout, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { RouteName } from "../router";

export interface NavbarProps {
}

export const Navbar: FC<NavbarProps> = props => {
    const navigate = useNavigate();
    const auth = false

    return (
        <Layout.Header>
            <Row justify="end">
                {
                    auth ?
                        <Menu theme="dark" mode="horizontal" selectable={ false }>
                            <div style={ { color: "white" } }>Пользователь</div>
                            <Menu.Item key={ 1 } onClick={ () => console.log("Выйти") }>Выйти</Menu.Item>
                        </Menu>
                        :
                        <Menu theme="dark" mode="horizontal" selectable={ false }>
                            <Menu.Item key={ 1 } onClick={ () => navigate(RouteName.LOGIN) }>Логин</Menu.Item>
                        </Menu>
                }

            </Row>
        </Layout.Header>
    )
};
