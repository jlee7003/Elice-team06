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

//API import
import { AllPostList } from "@/api/postList";

//더미에서 Posts라는 전체 리스트의 정보 인터페이스를 가져오고.... 그 내용물?을 post로 썼다면, 나는 이제 여기서? API로 정보를 받아와서 post라고 해줘야 겠는데..
//이걸 여기서 해도 되는가? reqpage를 보고 생각해보자....

//prop으로 받아와야 하는 것!
//어떤 페이지인지 라우터로 연결시켜주어야 하는것과 보스트
export const PaginationReal = (prop: { value: Posts }) => {
    /**
     * start: 한 range의 시작점(숫자)
     * end: 한 range의 끝점(숫자)
     * count: 한 range에 몇개의 post를 셋팅할 것인가
     */
    //Usenavigate
    const navigate = useNavigate();
    //현재 페이지 쿼리 가져오기
    const currentPage = useRef<number>(1); //default page : 1 from 쿼리
    const postList = useRef<PostLists | []>([]);

    const { id } = useParams();
    useEffect(() => {
        if (id === undefined) {
            navigate(ROUTES.ErrorPage.path);
            return; //to alret
        }
        currentPage.current = parseInt(id);
    });

    const range = 5;
    const count = 5; //한 페이지에 5개의 포스트를 보여줄 것
    const start = currentPage.current; //1
    const end = start + range;

    //start=1&end=3&count=2
    //['start=1', 'end=3','count=2'] 와 같이 넣어주면 AllPostList에서 &으로 엮어주고, API에서 getQuery가 엮어줄 것...임.

    const getAllPosts = async (start: number, end: number, count: number) => {
        const result = await AllPostList([`start=${start}`, `end=${end}`, `count=${count}`]);
        if (result === null) {
            //navigate(ROUTES.ErrorPage.path);
            console.log(result);
            return; //to alret
        }
        postList.current = result.data;
    };

    const test = getAllPosts(start, end, count).then;

    console.log(test);

    //const post=useRecoilValue(postState);
    // -----reqpage/page=1

    //"/reqpage/pages/:id",
    //현재 페이지 쿼리 받아오기

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
