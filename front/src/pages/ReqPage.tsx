/*lib*/
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import urlCheck from "@/recoil/urlCheck";

/*styles*/
import {
    GridContainer,
    Container,
    Main,
    Section,
    ButtonContianer,
} from "@/styles/pages/reqpage-style";

import { SectionSkele, NavSkele } from "@/styles/reqpage-skele-style";
/*components*/
import ReqeustCards from "@/components/RequestCards";
//pagination
import { Paginations } from "@/components/Paginations";
//Modal
import ModalState from "@/recoil/modalState";
import ChallengeRequestModal from "@/modal/ChallengeRequestModal";
//data interface
import { PostLists } from "@/types/post";
//API import
import API from "@/api/.";
//error handling
import { ROUTES } from "@/routes/.";

const ReqPage = () => {
    const navigate = useNavigate();
    //url, modal
    const [currentUrl, setCurrentUrl] = useRecoilState(urlCheck);
    const [onModal, setOnModal] = useRecoilState(ModalState);
    //현재 패이지 정보와 데이터 핸들링용 useState
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postList, setPostList] = useState<PostLists | null>(null);

    const { id } = useParams();

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, [currentUrl]);

    /**
     * start: 한 range의 시작점(숫자)
     * end: 한 range의 끝점(숫자)
     * count: 한 range에 몇개의 post를 셋팅할 것인가
     */
    const pageData = {
        start: currentPage, //1
        range: 5,
        count: 5, //한 페이지에 5개의 포스트를 보여줄 것
        end: currentPage + 5 - 1,
    };
    //query를 만들어 useEffect 내부의 함수에서 사용한다.
    const query = `all?start=${pageData.start}&end=${pageData.end}&count=${pageData.count}`;
    useEffect(() => {
        //API로 정보 받아오기
        const getAllPosts = async (param: string) => {
            const result = await API.get<PostLists>(["board", param]);
            //응답이 null 경우 체크(1)
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
            console.log("useEffect(API) is running in ReqPage");
            setPostList(res);
        });
    }, []);
    //묶어서 보내줄 객체 생성
    const PostProps = {
        PostList: postList,
        PageData: pageData,
    };

    //function for currnet page handling
    const settingCurrentPage = (id: number) => {
        if (id === undefined) {
            navigate(ROUTES.ErrorPage.path);
            return; //to alret
        }
        setCurrentPage(id);
    };

    console.log("checking PostList in ReqPage", postList);

    return (
        <Container>
            <GridContainer>
                <Main>
                    <>
                        {postList ? (
                            <>
                                <Section>
                                    <ReqeustCards postLists={postList} currentPage={currentPage} />
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
                                    </ButtonContianer>
                                </Section>
                                <Paginations
                                    value={PostProps}
                                    setCurrentPage={settingCurrentPage}
                                />
                            </>
                        ) : (
                            <>
                                <SectionSkele />
                                <NavSkele />
                            </>
                        )}
                    </>
                </Main>
            </GridContainer>
        </Container>
    );
};

export default ReqPage;
