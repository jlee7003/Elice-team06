/*lib*/
import { useRecoilState } from "recoil";
/*page*/
import { Banner } from "@styles/banner";
/*data*/
import userData from "../recoil/userData";
/*styles*/
import {
    Container,
    Main,
    Section,
    ButtonContianer,
    Nav,
    NavLink,
} from "@styles/pages/reqpage-style";
/*boards*/
import ReqeustCards from "@components/RequestCard";
import { request } from "https";

//페이지네이션로직도 셀렉터안에들어가야함 함수는 하나만 유발하는게좋음.....  그려주는 임무만 수행해야..얘는 셀렉터만

const ReqPage = () => {
    const [user, setUser] = useRecoilState(userData);
    //서버줘\

    const;

    //selector에서 값 가져오는순간 atom effect가
    //안뜨는동안 스켈레톤

    //이 페이지가 새로 그려지는순간 그대로 쓰겠다
    //

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
