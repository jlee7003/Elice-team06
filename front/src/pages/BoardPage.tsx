/*lib*/
import { useState, useEffect, MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

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

/*components*/
import PostCards from "@/components/PostCards";
//Modal
import ModalState from "@/recoil/modalState";
import BoardModal from "@/modal/BoardModal";
//data interface
import { PostLists } from "@/types/post";
//API import
import API from "@/api/.";
//error handling
import { ROUTES } from "@/routes/.";
import chat_img from "@/assets/chat_img.png";
import DarkMode from "@/recoil/darkMode";
import EasyPagination from "@/components/Easy-pagination";

//skeleton
import Skeleton from "@mui/material/Skeleton";

const pageData = {
    start: 1, // 시작 페이지
    end: 5, // 마지막 페이지
    postCount: 5, //한 페이지에 5개의 포스트를 보여줄 것

    isEnd: false, // 제일 마지막 페이지인지 아닌지
};

// 서버와 통신하기 위한 비동기 함수 - 자주 사용되는 반복된 코드이므로 함수로 분리함
const fetchingData = async () => {
    const query = `all?start=${pageData.start}&end=${pageData.end}&count=${pageData.postCount}`;

    const response = await API.get<PostLists>(["board", query]);

    if (response === null) {
        return null;
    }

    return response.data;
};

const BoardPage = () => {
    const [current, setCurrent] = useState(pageData.start);
    const [deleteMode, setDeleteMode] = useState(false);

    //현재 패이지 정보와 데이터 핸들링용 useState
    const [postList, setPostList] = useState<PostLists | null>(null);

    const navigate = useNavigate();

    const [darkMode] = useRecoilState(DarkMode);
    const [onModal, setOnModal] = useRecoilState(ModalState);

    useEffect(() => {
        //API로 정보 받아오기
        fetchingData().then((data: any) => {
            if (data === null) {
                navigate(ROUTES.ErrorPage.path);
                return;
            }
            setPostList(data);
        });
    }, []);

    const prevButton = () => {
        // 만약에 1이면 맨 첫페이지이므로 전 페이지로 이동하지 않는다.
        if (1 === current) {
            return;
        }

        // 맨마지막 페이지인지 아닌지 알려주는 pageData.isEnd 를 해제해준다.
        if (pageData.isEnd) {
            pageData.isEnd = false;
        }

        // 현재 페이지네이션의 시작보다 현재 페이지가 작을 경우 즉 6페이지에서 5페이지로 가는 등의 경우를 가정한다.
        if (current - 1 < pageData.start) {
            const range = pageData.end - pageData.start + 1;

            pageData.start -= range;
            pageData.end -= range;

            fetchingData().then((data: any) => {
                // 만약에 이전 페이지 데이터가 없는 경우에는 아무 일도 일어나지 않는다.
                if (Object.keys(data).length === 0) {
                    pageData.start += range;
                    pageData.end += range;
                } else {
                    setPostList(data);

                    setCurrent((prev) => prev - 1);
                }
            });
        } else {
            setCurrent((prev) => prev - 1);
        }
    };

    const nextButton = () => {
        // 맨마지막 페이지인경우에는 넥스트 버튼을 실행하지 않는다.
        if (pageData.isEnd) {
            return;
        }

        // 현재 페이지네이션의 끝보다 현재 페이지가 클 경우 즉 5페이지에서 6페이지로 가는 등의 경우를 가정한다.
        if (current + 1 > pageData.end) {
            const range = pageData.end - pageData.start + 1;

            pageData.start += range;
            pageData.end += range;

            fetchingData().then((data: any) => {
                // 만약에 다음 페이지 데이터가 없는 경우에는 아무 일도 일어나지 않는다.
                if (Object.keys(data).length === 0) {
                    pageData.start -= range;
                    pageData.end -= range;

                    pageData.isEnd = true;
                    return;
                } else {
                    setPostList(data);

                    setCurrent((prev) => prev + 1);
                }
            });
        } else {
            setCurrent((prev) => prev + 1);
        }
    };

    const currentButton = (e: MouseEvent<HTMLButtonElement>) => {
        const { name } = e.target as any;

        if (Number(name) < pageData.end) {
            pageData.isEnd = false;
        }

        setCurrent(Number(name));
    };

    return (
        <Container>
            <HomeBanners mode={darkMode ?? "Light"} height="190px">
                <Banner
                    bgImg={chat_img}
                    bgColor="linear-gradient(45deg,#61be92,#4e6af0,#868686)"
                    bgPosition="left 10px"
                    bgSize="542px"
                >
                    <p>
                        <span>커뮤니티</span>
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
                                            currentPage={current - 1}
                                            deleteMode={deleteMode}
                                        />
                                    </CardsHolder>
                                    <ButtonContianer>
                                        {/* <button onClick={() => setOnModal("challenge")}>
                                            글쓰기
                                        </button>
                                        {onModal == "challenge" && (
                                            <ChallengeRequestModal
                                                setOnModal={setOnModal}
                                                addfunction={alert}
                                            ></ChallengeRequestModal>
                                        )} */}
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
                                <EasyPagination
                                    prevButton={prevButton}
                                    nextButton={nextButton}
                                    currentButton={currentButton}
                                    pages={Object.keys(postList)}
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
