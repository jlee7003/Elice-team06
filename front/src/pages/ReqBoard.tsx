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

const ReqPage = () => {
    /*state for hover*/
    /*state for thumbsUp*/
    /*state for -(test)*/
    /*state for time*/

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
