//lib
import { useRef, useEffect, MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
//import { RecoilState, useRecoilState, useRecoilValue } from "recoil";
//import postState from "@/recoil/posts";

/*styles*/

import { Nav, NaviLink } from "@/styles/pages/reqpage-style";
import { ROUTES } from "@/routes/.";

//dummies
import { Posts } from "@/lib/dummyPosts";
import post from "@/lib/dummyPosts";

//real data
import { PostLists } from "@/types/post";
import { Post } from "@/types/post";

//더미에서 Posts라는 전체 리스트의 정보 인터페이스를 가져오고.... 그 내용물?을 post로 썼다면, 나는 이제 여기서? API로 정보를 받아와서 post라고 해줘야 겠는데..
//이걸 여기서 해도 되는가? reqpage를 보고 생각해보자....

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
