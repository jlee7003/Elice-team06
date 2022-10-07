import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Post from "../pages/challenge/Post";
import ErrorPage from "../pages/ErrorPage";
import Mypage from "../pages/Mypage";

interface route {
    path: string;
    Component: React.FC;
}

interface routeWrap {
    [key: string]: route;
}

export const ROUTES: routeWrap = {
    Home: {
        path: "/",
        Component: Home,
    },
    Login: {
        path: "/login",
        Component: Login,
    },
    Signup: {
        path: "/signup",
        Component: Signup,
    },
    Post: {
        path: "/challenge/posts",
        Component: Post,
    },
    ErrorPage: {
        path: "*",
        Component: ErrorPage,
    },
    Mypage: {
        path: "/mypage",
        Component: Mypage,
    },
};

export const ROUTES_LIST: route[] = Object.values(ROUTES);
