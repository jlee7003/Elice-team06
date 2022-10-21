import React from "react";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Post from "@/pages/challenge/Post";
import ChallengeDetail from "@/pages/challenge/ChallengeDetail";
import ErrorPage from "@/pages/ErrorPage";
import Mypage from "@/pages/Mypage";
import Landing from "@/pages/Landing";
import FindID from "@/pages/auth/FindID";
import FindPassword from "@/pages/auth/FindPassword";
import FindResult from "@/pages/auth/FindResult";
import Auth from "@/pages/auth/Auth";
import MyPosts from "@/pages/MyPosts";
import Admin from "@/pages/Admin";
import UserInfo from "@/pages/UserInfo";
import ChangePasswordPage from "@/pages/ChangePasswordPage";
import WithDrawalPage from "@/pages/WithDrawalPage";

const ChallengeList = React.lazy(() => import("@/pages/ChallengeList"));
const BoardPage = React.lazy(() => import("@/pages/BoardPage"));

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
    BoardPage: {
        path: "/boardPage/pages/:id",
        Component: BoardPage,
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
    Auth: {
        path: "/auth",
        Component: Auth,
    },
    ChallengeList: {
        path: "/challengelist/:target",
        Component: ChallengeList,
    },
    Admin: {
        path: "/admin",
        Component: Admin,
    },
    UserInfo: {
        path: "/mypage/UserInfo",
        Component: UserInfo,
    },
    ChangePasswordPage: {
        path: "/mypage/ChangePasswordPage",
        Component: ChangePasswordPage,
    },
    WithDrawalPage: {
        path: "/withdrawal",
        Component: WithDrawalPage,
    },
    ErrorPage: {
        path: "*",
        Component: ErrorPage,
    },
};

export const ROUTES_LIST: route[] = Object.values(ROUTES);
