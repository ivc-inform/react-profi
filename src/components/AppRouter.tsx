/** @format */

import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";

export interface AppRouterProps {}

export const AppRouter: FC<AppRouterProps> = props => {
    const auth = true;
    return (
        auth
            ?
            <Routes>
                { privateRoutes.map(route => <Route key={ route.path } { ...route } />) }
            </Routes>
            :
            <Routes>
                { publicRoutes.map(route => <Route key={ route.path } { ...route } />) }
            </Routes>
    );
};
