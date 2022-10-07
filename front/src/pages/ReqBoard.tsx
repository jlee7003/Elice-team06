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
    Nav,
    ArtContainer,
    Article,
    NavLink,
    Contents,
    Details,
    Box,
    Time,
    DetailContainer,
} from "@styles/pages/reqpage-style";

/*boards*/

/*icons*/
import { Reply, Views } from "@styles/common";

const ReqPage = () => {
    /*state for hover*/
    /*state for thumbsUp*/
    /*state for -(test)*/
    /*state for time*/

    return (
        <div>
            <Banner />
            <Container>
                <Main>
                    <Section>
                        <Article>
                            <ArtContainer>
                                <Contents>
                                    <h3>제목테스트</h3>
                                    <p>
                                        내용테스트 이렇게 적으면 되는데 이건 유저에게서 받아와야
                                        함...... 이걸 어떻게 매핑하지 ㅎㅎㅎㅎ 아무말 테스트 얍
                                        야근요정 물럿거라 얍얍얍 조금만 더 쓰면 두 줄 되겠다 그런데
                                        이거 내용물 넘치면 .... 이렇게 되야할텐데 한줄나타내야하니
                                        두줄나타내야하니
                                    </p>
                                </Contents>
                                <Box>
                                    <button>추천</button>
                                    <span>투표</span>
                                </Box>
                            </ArtContainer>
                            <DetailContainer>
                                <Details>
                                    <li>
                                        <span>작성자</span>홍길동
                                    </li>
                                    <li>
                                        <i>
                                            <Reply />
                                        </i>
                                        100개의 댓글
                                    </li>
                                    <li>
                                        <i>
                                            <Views />
                                        </i>
                                        1300views
                                    </li>
                                </Details>
                                <Time>5 hours ago</Time>
                            </DetailContainer>
                        </Article>
                        <Article />
                        <Article />
                        <Article />
                        <Article />
                    </Section>
                    <Nav>
                        <ul>
                            <span>&lt;</span>
                            <NavLink to="/reqboard/1">1</NavLink>
                            <NavLink to="/reqboard/2">2</NavLink>
                            <NavLink to="/reqboard/3">3</NavLink>
                            <NavLink to="/reqboard/4">4</NavLink>
                            <NavLink to="/reqboard/5">5</NavLink>
                            <span>&gt; </span>
                        </ul>
                    </Nav>
                </Main>
            </Container>
        </div>
    );
};

export default ReqPage;
