//reqeust card practice codes
import { Posts } from "./dummyPosts";
import { Nav, NavLink } from "@/styles/pages/reqpage-style";
//import post from "@/lib/dummyPosts";//obejct not type
//get interface to props
import {
    ArtContainer,
    Article,
    Contents,
    Details,
    Box,
    Time,
    DetailContainer,
} from "@/styles/common/requestCard-style";

const Testcompos = (prop: { value: Posts }) => {
    //post의 뭉치(배열?)
    const posts = prop.value[1];
    console.log(typeof posts);
    console.log(posts);

    return (
        <>
            {posts.map((post) => (
                <Article>
                    <ArtContainer>
                        <Contents key={post.title}>
                            <h3>공부중입니다 {post.title}</h3>
                            <p>포스트 관리하기...post.summary{post.summary}</p>
                        </Contents>
                        <Box>
                            <button>{post.like}</button>
                            <span>{post.vote}</span>
                        </Box>
                    </ArtContainer>
                    <DetailContainer>
                        <Details>
                            <li>
                                <span>작성자</span>
                                {post.writer}
                            </li>
                            <li>
                                <i></i>
                                {post.comments}개의 댓글
                            </li>
                            <li>
                                <i></i>
                                {post.views} views
                            </li>
                        </Details>
                        <Time>{post.timestamp}</Time>
                    </DetailContainer>
                </Article>
            ))}
        </>
    );
};

//prop[1][0].title
//key, arrayindex

export default Testcompos;
//filename=component name(function name)

// console.log("페이지 5개 뭉치", prop.value);
// console.log("페이지에서 게시글 5개 prop.value[1]", prop.value[1]);
// console.log("게시글 1개 prop.value[1][0]", prop.value[1][0]);

{
    /* <h2>글제목: {prop.value[1][0].title}</h2>
<p>글내용: {prop.value[1][0].summary}</p>
<p>글쓴이: {prop.value[1][0].writer}</p>
<p>like:{prop.value[1][0].like}</p>
<p>view:{prop.value[1][0].views}</p>
<p>vote:{prop.value[1][0].vote}</p> */
}
