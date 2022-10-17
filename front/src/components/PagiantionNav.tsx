//lib: recoil
import { useState, useRef, useEffect, useParams } from "react";
import { useNavigate } from "react-router-dom";
import { RecoilState, useRecoilState, useRecoilValue } from "recoil";
import postState from "@/recoil/posts";

/*styles*/
import {
    Container,
    Main,
    Section,
    ButtonContianer,
    Nav,
    NavLink,
    NaviLink,
} from "@/styles/pages/reqpage-style";

//dummies
import post from "@/lib/dummyPosts";

const Pagination = () => {
    //const post=useRecoilValue(postState);
    // -----reqpage/page=1
    const postList = useRef<object[] | []>([]);
    //"/reqpage/pages/:id",
    const pageNumber = useParams(); //현재 페이지 쿼리 받아오기
    useEffect(() => {
        postList.current = pageNumber;
    });

    // return(

    // )
};
