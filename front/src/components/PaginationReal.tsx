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
import { Post, PostProps } from "@/types/post";

//API import
import API from "@/api/.";
import { AllPostList } from "@/api/postList";

//더미에서 Posts라는 전체 리스트의 정보 인터페이스를 가져오고.... 그 내용물?을 post로 썼다면, 나는 이제 여기서? API로 정보를 받아와서 post라고 해줘야 겠는데..
//이걸 여기서 해도 되는가? reqpage를 보고 생각해보자....

//prop으로 받아와야 하는 것!
//어떤 페이지인지 라우터로 연결시켜주어야 하는것과 보스트
export const PaginationReal = (props: { value: PostProps; setCurrentPage: any }) => {
    // /**
    //  * start: 한 range의 시작점(숫자)
    //  * end: 한 range의 끝점(숫자)
    //  * count: 한 range에 몇개의 post를 셋팅할 것인가
    //  */
    // //Usenavigate
    const navigate = useNavigate();
    // //현재 페이지 쿼리 가져오기
    // const currentPage = useRef<number>(1); //default page : 1 from 쿼리
    // const postList = useRef<PostLists | []>([]);

    // const { id } = useParams();
    // const pageData = {
    //     start: currentPage.current, //1
    //     range: 5,
    //     count: 5, //한 페이지에 5개의 포스트를 보여줄 것
    //     end: currentPage.current + 5,
    // };
    // const query = `all?start=${pageData.start}&end=${pageData.end}&count=${pageData.count}`;

    // useEffect(() => {
    //     if (id === undefined) {
    //         navigate(ROUTES.ErrorPage.path);
    //         return; //to alret
    //     }
    //     currentPage.current = parseInt(id);

    //     const getAllPosts = async (param: string) => {
    //         const result = await API.get<PostLists>(["board", param]);
    //         if (result === null) {
    //             navigate(ROUTES.ErrorPage.path);
    //             //console.log(result);
    //             return; //to alret
    //         }
    //         return result.data;
    //     };
    //     getAllPosts(query).then((res) => {
    //         if (res === undefined) {
    //             navigate(ROUTES.ErrorPage.path);
    //             return; //to alret
    //         }
    //         postList.current = res;
    //         console.log("postList.current: ", postList.current);
    //         console.log("postList.current의 타입: ", typeof postList.current);
    //     });
    // });

    const postList = props.value.PostList;
    const pageData = props.value.PageData;
    const setCurrentPage = props.setCurrentPage;

    if (Object.keys(postList).length > 0) {
        const limit = Object.keys(postList).length - 1;
        //console.log("limit", limit);
    }

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        const { name } = e.target as HTMLButtonElement;
        if (name === "prev") {
            if (pageData.start - pageData.range < 0) {
                pageData.start = 1;
            }
            pageData.start = pageData.start - pageData.range; //start
            return navigate(`/reqpage/pages/1`);
        }
        if (name === "next") {
            const limit = Object.keys(postList).length - 1;
            if (pageData.end + pageData.range > limit) {
                pageData.start = limit - pageData.range;
            }
            pageData.start = pageData.start + pageData.range; //start
            console.log("pageData.end", pageData.end);
            return navigate(`/reqpage/pages/${limit}`);

            //return navigate(`/reqpage/pages/${pageData.end}`);
        }
        console.log("parseInt(name)", parseInt(name));
        setCurrentPage(parseInt(name));
        return navigate(`/reqpage/pages/${name}`);
    };

    return (
        <Nav>
            <ul>
                <NaviLink name="prev" onClick={onClick}>
                    <span>&lt;</span>
                </NaviLink>
                {Object.keys(postList).map((post, idx) => {
                    return (
                        <NaviLink key={idx} name={post} onClick={onClick}>
                            {post}
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
