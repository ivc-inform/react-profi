import React, { FC } from "react";
import { Layout, Row } from "antd";

export interface NavbarProps {
}

export const Navbar: FC<NavbarProps> = props => {
    return (
        <Layout.Header>
            <Row justify="end">
                Пункт
            </Row>
        </Layout.Header>
    )
};
