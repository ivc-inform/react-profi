/** @format */

import React, { FC } from "react";
import { Card, Row } from "antd";
import { LoginForm } from "../components/LoginForm";

export interface LoginProps {}

export const Login: FC<LoginProps> = props => {
    return (
        <div>
            <Row justify="center" align="middle" className="h100">
                <Card>
                    <LoginForm />
                </Card>
            </Row>
        </div>
    );
};
