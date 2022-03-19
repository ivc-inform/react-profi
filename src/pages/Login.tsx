/** @format */

import React, { FC } from "react";
import { Row } from "antd";
import { LoginForm } from "../components/LoginForm";

export interface LoginProps {}

export const Login: FC<LoginProps> = props => {
    return (
        <div>
            <Row justify="center" align="middle" className="h100">
                <LoginForm />
            </Row>
        </div>
    );
};
