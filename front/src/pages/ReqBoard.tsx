/*lib*/
import { useRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";
/*data*/
import userData from "../recoil/user";
/*styles*/
import {
    Container,
    Main,
    Section,
    ButtonContianer,
    Nav,
    NavLink,
} from "@/styles/pages/reqpage-style";
/*boards*/
import ReqeustCards from "@/components/RequestCard";
import { postsSelector } from "@/recoil/requestPosts";
import { useEffect } from "react";

const ReqPage = () => {
    const [page, setPage] = useState(0);
    const posts = useRecoilValue(postsSelector(page));

    useEffect(() => {
        console.log("pageATOM : ", page);
    }, [page]);

    useEffect(() => {
        setPage(1);
    }, []);

    useEffect(() => {
        console.log("posts : ", posts);
    }, [posts]);

    const handlePageUp = () => {
        setPage((oldPage) => {
            return oldPage + 1;
        });
    };

    return (
        <div>
            <Container>
                <Main>
                    <Section>
                        <ReqeustCards />
                        <ReqeustCards />
                        <ReqeustCards />
                        <ReqeustCards />
                        <ReqeustCards />
                        <ButtonContianer>
                            <button>글쓰기</button>
                        </ButtonContianer>
                    </Section>
                    <Nav>
                        <ul>
                            <NavLink to="/reqboard/1">
                                <span>&lt;</span>
                            </NavLink>
                            <NavLink to="/reqboard/1">1</NavLink>
                            <NavLink to="/reqboard/2">2</NavLink>
                            <NavLink to="/reqboard/3">3</NavLink>
                            <NavLink to="/reqboard/4">4</NavLink>
                            <NavLink to="/reqboard/5">5</NavLink>
                            <NavLink to="/reqboard/5">
                                <span>&gt; </span>
                            </NavLink>
                        </ul>
                    </Nav>
                </Main>
            </Container>
        </div>
    );
};

export default ReqPage;

//공부중...
// return (
//     <>
//         <div>
//             <h1> currentPage : {page}</h1>
//             <button onClick={handlePageUp}>page up</button>
//             <div>
//                 {posts.map((post) => {
//                     return (
//                         <div key={post.id}>
//                             <h2>{post.title}</h2>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     </>
// );
