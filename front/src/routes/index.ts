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
import ChallengeList from "@/pages/ChallengeList";
import FindID from "@/pages/auth/FindID";
import FindPassword from "@/pages/auth/FindPassword";
import FindResult from "@/pages/auth/FindResult";
import MyPosts from "@/pages/MyPosts";

interface route {
    path: string;
    Component: React.FC;
}

interface routeWrap {
    [key: string]: route;
}

export const ROUTES: routeWrap = {
    Landing: {
        path: "/",
        Component: Landing,
    },
    Home: {
        path: "/home",
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
    ChallengeDetail: {
        path: "/challenge/challengedetail",
        Component: ChallengeDetail,
    },
    Mypage: {
        path: "/mypage",
        Component: Mypage,
    },
    MyPosts: {
        path: "/MyPosts",
        Component: MyPosts,
    },
    FindID: {
        path: "/auth/email",
        Component: FindID,
    },
    FindPassword: {
        path: "/auth/user",
        Component: FindPassword,
    },
    FindResult: {
        path: "/find/result",
        Component: FindResult,
    },
    ChallengeList: {
        path: "/challengelist/:target",
        Component: ChallengeList,
    },
    ErrorPage: {
        path: "*",
        Component: ErrorPage,
    },
};

export const ROUTES_LIST: route[] = Object.values(ROUTES);
