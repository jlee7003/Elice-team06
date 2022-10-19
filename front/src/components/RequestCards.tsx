/*lib*/
import { useRecoilState } from "recoil";
import { useState } from "react";
import { Posts } from "@/lib/dummyPosts";
/*styles*/
import {
    ArtContainer,
    Article,
    Contents,
    Details,
    Box,
    Time,
    DetailContainer,
} from "@/styles/common/requestCard-style";

/*icons*/
import { Post, PostProps, PostLists } from "@/types/post";
//인터페이스는 함수밖으로

const ReqeustCards = (prop: { value: Posts; postLists: PostLists; currentPage: number }) => {
    // const [user, setUser] = useRecoilState(userData);
    // const [post, setPost]=useState([]);
    // // const boards:boradsInfo(user)=()=>{
    // const postList=useMemo(()=>{},)

    const postlist = prop.postLists;
    console.log("postlist", postlist);

    // }

    //const currentPageNum = prop.currentPage;
    //const postLists = prop.postLists.PostList;

    //console.log("requestcads의 postLists", postLists);

    //const currentPosts = postLists[currentPageNum];
    //console.log("requestcards의 currentPosts", currentPosts);

    //const postLists = prop.postLists;
    //const posts = postLists.PostList[currentPage];
    //console.log("test", posts);
    //console.log("currentPage", currentPage);
    //console.log("testArray", testArray);
    //value가 nav 페이지에 따라 바뀌어야 함
    //prop: { value: Posts }?
    //map의 키를 무엇으로? 인덱스?

    const posts = prop.value[1];

    return (
        <div>
            {posts.map((post, idx) => (
                <Article key={idx}>
                    <h1>테스트용</h1>
                    <h2>{post.title}</h2>
                </Article>
            ))}
        </div>
    );
};

export default ReqeustCards;
