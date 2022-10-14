/*lib*/
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
/*data*/
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
/*boards*/
import ReqeustCards from "@/components/RequestCards";
import NavPagination from "./NavPagination";
import { postsSelector } from "@/recoil/requestPosts";
import { useEffect } from "react";
//pagination
import Pagination from "@/components/pagination";
import urlCheck from "@/recoil/urlCheck";
//dummies
import post from "@/lib/dummyPosts";

const ReqPage = () => {
    const [currentUrl, setCurrentUrl] = useRecoilState(urlCheck);

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, [currentUrl]);
    const currentPage = useRef<number>(1); //default page : 1
    const [page, setPage] = useState("");
    //Setting Default
    const totalPages = Object.keys(post).length;
    const NavNum = parseInt(Object.values(post)[0].length); //페이지당 사이즈 넘버
    //Changing values by users << 1 2 3 4 5 >>
    const startNum = parseInt(Object.keys(post)[0]); //default first nav num: 1
    //const endNum = Object.keys(post)[4]; //default end nav num: 5

    //let linkString = `start=${startNum}&end=${startNum + NavNum - 1}&page=${currentPage.current}`;

    const CheckingButtonClick = () => {
        console.log("currentPage.current: ", currentPage.current);
    };

    const setPaging = () => {
        setPage(`start=${startNum}&end=${startNum + NavNum - 1}&page=${currentPage.current}`);
    };

    const pageNumButton = () => {
        currentPage.current = 2;
    };

    const navigate = useNavigate();
    const navtesting = () => {
        currentPage.current = 2;
        navigate(`start=${startNum}&end=${startNum + NavNum - 1}&page=${currentPage.current}`);
    };

    return (
        <Container>
            <Main>
                <Section>
                    <ReqeustCards value={post} />
                    <ButtonContianer>
                        <button>글쓰기</button>
                        <button onClick={CheckingButtonClick}>console checking</button>
                        <a onClick={navtesting}>TEST</a>
                    </ButtonContianer>
                </Section>
                <NavPagination value={post} />
            </Main>
        </Container>
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

// const [page, setPage] = useState(0);
//     const posts = useRecoilValue(postsSelector(page));

//     useEffect(() => {
//         console.log("pageATOM : ", page);
//     }, [page]);

//     useEffect(() => {
//         setPage(1);
//     }, []);

//     useEffect(() => {
//         console.log("posts : ", posts);
//     }, [posts]);

//     const handlePageUp = () => {
//         setPage((oldPage) => {
//             return oldPage + 1;
//         });
//     };

/*테스트요 임시로 옮겨둠*


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


            */

//Storage

{
    /* <NavLink to="/reqboard/1">{startNum}</NavLink>
<NavLink to="/reqboard/2">{startNum + 1}</NavLink>
<NavLink to="/reqboard/3">{startNum + 2}</NavLink>
<NavLink to="/reqboard/4">{startNum + 3}</NavLink>
<NavLink to="/reqboard/5">{startNum + 4}</NavLink> */
}
