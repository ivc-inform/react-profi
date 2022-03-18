/** @format */

import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteName } from "../router";

export interface AppRouterProps {}

export const AppRouter: FC<AppRouterProps> = props => {
    const auth = false;
    return (
        auth
            ?
            <Routes>
                { privateRoutes.map(route => <Route key={ route.path } { ...route } />) }
                <Route path="*" element={<Navigate to={RouteName.EVENT} />} />
            </Routes>
            :
            <Routes>
                { publicRoutes.map(route => <Route key={ route.path } { ...route } />) }
                <Route path="*" element={<Navigate to={RouteName.LOGIN} />} />
            </Routes>
    );
};
