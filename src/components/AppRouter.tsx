/** @format */

import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteName } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";

export interface AppRouterProps {}

export const AppRouter: FC<AppRouterProps> = props => {
    const { isAuth } = useTypedSelector(state => state.auth);
    return isAuth ? (
        <Routes>
            {privateRoutes.map(route => (
                <Route key={route.path} {...route} />
            ))}
            <Route path="*" element={<Navigate to={RouteName.EVENT} />} />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map(route => (
                <Route key={route.path} {...route} />
            ))}
            <Route path="*" element={<Navigate to={RouteName.LOGIN} />} />
        </Routes>
    );
};
