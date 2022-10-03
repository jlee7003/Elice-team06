import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";

interface route {
    path: string;
    Component: React.FC;
}

interface routeWrap {
    [key: string]: route;
}

export const ROUTES: routeWrap = {
    Login: {
        path: "/",
        Component: Login,
    },
    Home: {
        path: "/home",
        Component: Home,
    },
};

export const ROUTES_LIST: route[] = Object.values(ROUTES);
