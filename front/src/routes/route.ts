import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Post from "../pages/challenge/Post";
import ErrorPage from "../pages/ErrorPage";

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
        Component: Home,
    },
    Home: {
        path: "/login",
        Component: Login,
    },
    Post: {
        path: "/challenge/posts",
        Component: Post,
    },
    ErrorPage: {
        path: "*",
        Component: ErrorPage,
    },
};

export const ROUTES_LIST: route[] = Object.values(ROUTES);
