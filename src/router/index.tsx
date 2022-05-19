/** @format */

import * as React from "react";
import { Login } from "../pages/Login";
import { Events } from "../pages/Events";

export interface IRoute {
    path: string;
    element: React.ReactNode;
}

export enum RouteName {
    LOGIN = "/login",
    EVENT = "/"
}

export const publicRoutes: IRoute[] = [{ path: RouteName.LOGIN, element: <Login /> }];

export const privateRoutes: IRoute[] = [{ path: RouteName.EVENT, element: <Events /> }];
