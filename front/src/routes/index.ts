import React from "react";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import ReqPage from "@/pages/ReqPage";
import Post from "@/pages/challenge/Post";
import ChallengeDetail from "@/pages/challenge/ChallengeDetail";
import ErrorPage from "@/pages/ErrorPage";
import Mypage from "@/pages/Mypage";
import Landing from "@/pages/Landing";
import Auth from "@/pages/Auth";
import Challenges from "@/pages/Challenges";

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
    ReqPage: {
        path: "/reqpage/pages/:id",
        Component: ReqPage,
    },
    Landing: {
        path: "/landing",
        Component: Landing,
    },
    ChallengeDetail: {
        path: "/challenge/challengedetail",
        Component: ChallengeDetail,
    },
    Mypage: {
        path: "/mypage",
        Component: Mypage,
    },
    Auth: {
        path: "/auth/:target",
        Component: Auth,
    },
    Challenges: {
        path: "/challenges/:target",
        Component: Challenges,
    },

    ErrorPage: {
        path: "*",
        Component: ErrorPage,
    },
};

export const ROUTES_LIST: route[] = Object.values(ROUTES);

//test

// import TestPageReq from "@/pages/testPageReq";
// import TestPageReal from "@/pages/TestPageReal";
// import TestPage from "@/pages/testPageReq";

// RqeTestPage: {
//     path: "/reqpage/start=1&end=5&page=2",
//     Component: Signup,
// },
// TestPage: {
//     path: "/testpage",
//     Component: TestPage,
// },
