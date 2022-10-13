/*lib*/
import { useRecoilState, useRecoilValue } from "recoil";
import { useState, useRef } from "react";
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
import ReqeustCards from "@/components/RequestCards";
import { postsSelector } from "@/recoil/requestPosts";
import { useEffect } from "react";
//pagination
import Pagination from "@/components/pagination";
import urlCheck from "@/recoil/urlCheck";

const ReqPage = () => {
    const [currentUrl, setCurrentUrl] = useRecoilState(urlCheck);

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, [currentUrl]);
    //     //page setting
    //    //object[] 의 key가 page값이 된다. { 1: [{...}, {...}, {...}] }
    //    //post... 로 받아온다고 치고...
    //    const post:{
    //     [key:number]:
    //    }={ 1: [{...}, {...}, {...}] }
    //    const totalPages=Object.keys(post).length;
    //    const NavNum=Object.values(post).length;//페이지당 사이즈 넘버
    //    const currentPage =useRef(1); //default page : 1
    //    const startNum=useRef(1)
    //    const [NavStartNum, setNavStartNum]=useState(1);
    //    const [NavEndNum, setNavEndNum]=useState(5);

    //    //useState를 사용하여 startNum과 endNum을 세팅
    //    const firstPage=(currentPage:number)=>{
    //     setNavStartNum(currentPage-(currentPage%NavNum)+1);
    //    }
    //    const endPage=(currentPage:number)=>{
    //     setNavEndNum(currentPage-(currentPage%NavNum)+NavNum);
    //    }

    //    //이걸 가지고 이제 뿌려주는거
    //    //nav에서 12345 얘네를 각각 클릭하면 currnet페이지 핸들링하기
    //    //curr를 compo내부로 .......... 리랜더링 할필요가 없는 값인데 페이지를 누를때마다 리랜더링이? 되네?

    //    // 1 2 3 4 5 현재 페이지가 바뀌는 것도 알아야 한다->useRef
    //    const handlepage=(name:number)=>{
    //     return currentPage.current+=name
    //    }

    //    const ChangeNextBlock=(currentPage:number)=>{

    //     return startNum.current=(currentPage-(currentPage%NavNum)+1)+5

    //    }

    //클릭 시 currentpage up해줄 함수

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
