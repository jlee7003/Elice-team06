/*lib*/
import { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
/*data*/
/*styles*/
import {
    GridContainer,
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
import { Banner } from "@/styles/banner";
import { postsSelector } from "@/recoil/requestPosts";
import { useEffect } from "react";
//pagination
//import Pagination from "@/components/pagination";
import urlCheck from "@/recoil/urlCheck";
//dummies
import post from "@/lib/dummyPosts";
//Modal
import ModalState from "@/recoil/modalState";
import ChallengeRequestModal from "@/modal/ChallengeRequestModal";
import { Pagination } from "@/components/PagiantionNav";
//get data by API
import { AllPostList } from "@/api/postList";

import { PaginationReal } from "@/components/PaginationReal";

//useState이식중
//real data
import { PostLists } from "@/types/post";
import { Post } from "@/types/post";
//API import
import API from "@/api/.";
import { ROUTES } from "@/routes/.";

const ReqPage = () => {
    const [currentUrl, setCurrentUrl] = useRecoilState(urlCheck);
    const [onModal, setOnModal] = useRecoilState(ModalState);
    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, [currentUrl]);
    //---------------------------------------------------
    //Usenavigate
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState<number>(1);
    //const postList = useRef<PostLists | []>([]);
    const [postList, setPostList] = useState<PostLists | []>([]);
    const { id } = useParams();

    const settingCurrentPage = (id: number) => {
        if (id === undefined) {
            navigate(ROUTES.ErrorPage.path);
            return; //to alret
        }
        setCurrentPage(id);
    };

    const pageData = {
        start: currentPage, //1
        range: 5,
        count: 5, //한 페이지에 5개의 포스트를 보여줄 것
        end: currentPage + 5,
    };
    const query = `all?start=${pageData.start}&end=${pageData.end}&count=${pageData.count}`;

    useEffect(() => {
        const getAllPosts = async (param: string) => {
            const result = await API.get<PostLists>(["board", param]);
            if (result === null) {
                navigate(ROUTES.ErrorPage.path);
                //console.log(result);
                return; //to alret
            }
            return result.data;
        };
        getAllPosts(query).then((res) => {
            if (res === undefined) {
                navigate(ROUTES.ErrorPage.path);
                return; //to alret
            }

            //PostProps.PostList = postList.current;

            //console.log("useEffect 내부의 postList.current: ", postList.current);
            //console.log("postList.current의 타입: ", typeof postList.current);
            //console.log("내부의", PostProps.PostList);
            console.log("useEffect실행됨");
            setPostList(res);
            //postList.current = res;
        });
    }, []);
    const PostProps = {
        PostList: postList, //postList.current, //
        PageData: pageData,
    };

    //console.log("외부의PostProps.PostList", PostProps.PostList);
    console.log("외부의realPostList", postList);
    //console.log("currentPage", currentPage);
    //console.log("바깥쪽 postList.current: ", postList.current);
    //console.log("PostProps", PostProps.PostList);

    // const getPosts = async () => {
    //     const result = await AllPostList();
    //     console.log("result는?", result);
    // };

    // getPosts();

    return (
        <Container>
            <Banner />
            <GridContainer>
                <Main>
                    <Section>
                        <ReqeustCards value={post} postLists={postList} currentPage={currentPage} />
                        <ButtonContianer>
                            <button onClick={() => setOnModal("challenge")}>글쓰기</button>
                            {onModal == "challenge" && (
                                <ChallengeRequestModal
                                    setOnModal={setOnModal}
                                    addfunction={alert}
                                ></ChallengeRequestModal>
                            )}
                        </ButtonContianer>
                    </Section>
                    <PaginationReal value={PostProps} setCurrentPage={settingCurrentPage} />
                </Main>
            </GridContainer>
        </Container>
    );
};

export default ReqPage;

//<ReqeustCards value={PostProps} currentPageNum={currentPage} />

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
