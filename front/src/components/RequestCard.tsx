/*styles*/
import {
    ArtContainer,
    Article,
    Contents,
    Details,
    Box,
    Time,
    DetailContainer,
} from "@styles/common/requestCard-style";

/*icons*/
import { Reply, Views } from "@styles/common";

const ReqeustCards = () => {
    /*state for hover*/
    /*state for thumbsUp*/
    /*state for -(test)*/
    /*state for time*/

    return (
        <div>
            <Article>
                <ArtContainer>
                    <Contents>
                        <h3>제목테스트</h3>
                        <p>
                            내용테스트 이렇게 적으면 되는데 이건 유저에게서 받아와야 함...... 이걸
                            어떻게 매핑하지 ㅎㅎㅎㅎ 아무말 테스트 얍
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
        </div>
    );
};

export default ReqeustCards;
