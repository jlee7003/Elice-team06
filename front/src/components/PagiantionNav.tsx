//lib
import { useRef, useEffect, MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
//import { RecoilState, useRecoilState, useRecoilValue } from "recoil";
//import postState from "@/recoil/posts";

/*styles*/

import { Nav, NaviLink, Main } from "@/styles/pages/reqpage-style";
import { ROUTES } from "@/routes/.";

//dummies
import { Posts } from "@/lib/dummyPosts";
import post from "@/lib/dummyPosts";

//prop으로 받아와야 하는 것!
//어떤 페이지인지 라우터로 연결시켜주어야 하는것과 보스트
export const Pagination = (prop: { value: Posts }) => {
    const postList = useRef<object[] | []>([]);
    //Usenavigate
    const navigate = useNavigate();
    //const post=useRecoilValue(postState);
    // -----reqpage/page=1

    //"/reqpage/pages/:id",
    //현재 페이지 쿼리 받아오기
    const { id } = useParams();
    useEffect(() => {
        if (id === undefined) {
            navigate(ROUTES.ErrorPage.path);
            return; //to alret
        }
        const currentPageNumber = parseInt(id);
        postList.current = post[currentPageNumber];
    });

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        const { name } = e.target as HTMLButtonElement;
        navigate(`/reqpage/pages/${name}`);
    };

    return (
        <Nav>
            <ul>
                <NaviLink name="prev" onClick={onClick}>
                    <span>&lt;</span>
                </NaviLink>
                {Object.keys(post).map((page, idx) => {
                    return (
                        <NaviLink key={idx} name={page} onClick={onClick}>
                            {page}
                        </NaviLink>
                    );
                })}
                <NaviLink name="next " onClick={onClick}>
                    <span>&gt; </span>
                </NaviLink>
            </ul>
        </Nav>
    );
};
