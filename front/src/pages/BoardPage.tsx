/*lib*/
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import urlCheck from "@/recoil/urlCheck";

/*styles*/
import {
    GridContainer,
    Container,
    // Main,
    Section,
    ButtonContianer,
    SkeletonContent,
    CardsHolder,
} from "@/styles/pages/reqpage-style";
import { Main } from "@/components/common/Main";

import { HomeBanners, Banner } from "@/styles/banner";

import { SectionSkele, NavSkele } from "@/styles/reqpage-skele-style";
/*components*/
import PostCards from "@/components/PostCards";
//pagination
import { Paginations } from "@/components/Paginations";
//Modal
import ModalState from "@/recoil/modalState";
import ChallengeRequestModal from "@/modal/ChallengeRequestModal";
import BoardModal from "@/modal/BoardModal";
//data interface
import { PostLists } from "@/types/post";
//API import
import API from "@/api/.";
//error handling
import { ROUTES } from "@/routes/.";
import assets from "@/lib/assets";
import DarkMode from "@/recoil/darkMode";

//skeleton
import Skeleton from "@mui/material/Skeleton";

const BoardPage = () => {
    const [darkMode] = useRecoilState(DarkMode);
    const navigate = useNavigate();
    //url, modal
    const [currentUrl, setCurrentUrl] = useRecoilState(urlCheck);
    const [onModal, setOnModal] = useRecoilState(ModalState);

    const [deleteMode, setDeleteMode] = useState(false);

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, [currentUrl]);

    //현재 패이지 정보와 데이터 핸들링용 useState
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentRange, setCurrentRange] = useState<number>(0);
    const [postList, setPostList] = useState<PostLists | null>(null);
    //console.log("현재 페이지 수 : ", currentPage);
    const { id } = useParams();

    /**
     * start: 한 range의 시작점(숫자)
     * end: 한 range의 끝점(숫자)
     * count: 한 range에 몇개의 post를 셋팅할 것인가
     */

    //현재 페이지: currentPage
    //현재 range: currentRange

    const pageData = {
        start: 5 * currentRange + 1, //1
        range: 5,
        count: 5, //한 페이지에 5개의 포스트를 보여줄 것
        end: 5 * (currentRange + 1),
    };
    //query를 만들어 useEffect 내부의 함수에서 사용한다.
    const query = `all?start=${pageData.start}&end=${pageData.end}&count=${pageData.count}`;
    //console.log("Reqpage의 쿼리", query);

    useEffect(() => {
        //API로 정보 받아오기
        const getAllPosts = async (param: string) => {
            const result = await API.get<PostLists>(["board", param]);
            //응답이 null 경우 체크()
            if (result === null) {
                navigate(ROUTES.ErrorPage.path);
                return; //to alret
            }
            return result.data;
        }; //promise로 받는 것을 핸들링
        getAllPosts(query).then((res) => {
            //응답이 undefined 경우 체크(2)
            if (res === undefined) {
                navigate(ROUTES.ErrorPage.path);
                return; //to alret
            }
            console.log("query:", query);
            console.log("res내용물", res);
            console.log("res의 타입", typeof res);
            //console.log("useEffect(API) is running in ReqPage");
            setPostList(res);
        });
    }, []);
    //묶어서 보내줄 객체 생성
    const PostProps = {
        PostList: postList,
        PageData: pageData,
    };

    //console.log("postList 체크!!!!!!!!", postList);

    //console.log("checking PostList in ReqPage", postList);

    //function for currnet page handling
    const settingCurrentPage = (num: number) => {
        if (num === undefined) {
            navigate(ROUTES.ErrorPage.path);
            return; //to alret
        }
        setCurrentPage(num);
    };

    const settingCurrentRange = (num: number) => {
        if (num === undefined) {
            navigate(ROUTES.ErrorPage.path);
            return;
        }
        setCurrentRange(num);
    };

    return (
        <Container>
            <HomeBanners mode={darkMode ?? "Light"} height="190px">
                <Banner
                    bgImg={assets("chat_img.png")}
                    bgColor="linear-gradient(45deg,#61be92,#4e6af0,#868686)"
                    bgPosition="left 10px"
                    bgSize="542px"
                >
                    <p>
                        <span>탄소 궁시렁</span>
                    </p>
                </Banner>
            </HomeBanners>
            <GridContainer>
                <Main>
                    <>
                        {postList ? (
                            <>
                                <Section>
                                    <CardsHolder>
                                        <PostCards
                                            postLists={postList}
                                            currentPage={currentPage - 1}
                                            deleteMode={deleteMode}
                                        />
                                    </CardsHolder>
                                    <ButtonContianer>
                                        <button onClick={() => setOnModal("challenge")}>
                                            글쓰기
                                        </button>
                                        {onModal == "challenge" && (
                                            <ChallengeRequestModal
                                                setOnModal={setOnModal}
                                                addfunction={alert}
                                            ></ChallengeRequestModal>
                                        )}

                                        <button onClick={() => setOnModal("board")}>
                                            의견 남기기
                                        </button>
                                        {/* <button onClick={() => setDeleteMode((prev) => !prev)}>
                                            삭제하기
                                        </button> */}
                                        {onModal == "board" && (
                                            <BoardModal
                                                setOnModal={setOnModal}
                                                addfunction={alert}
                                            ></BoardModal>
                                        )}
                                    </ButtonContianer>
                                </Section>
                                <Paginations
                                    value={PostProps}
                                    setCurrentPage={settingCurrentPage}
                                    setCurrentRange={settingCurrentRange}
                                    currentPageNumber={currentPage}
                                    currentRangeNumber={currentRange}
                                />
                            </>
                        ) : (
                            <>
                                {/* <SectionSkele />
                                <NavSkele /> */}
                                {[0, 1, 2, 3, 4].map((i) => {
                                    return (
                                        <SkeletonContent key={i}>
                                            <Skeleton variant="rounded" width={1265} height={190} />
                                        </SkeletonContent>
                                    );
                                })}
                            </>
                        )}
                    </>
                </Main>
            </GridContainer>
        </Container>
    );
};

export default BoardPage;
