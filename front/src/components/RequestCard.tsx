/*lib*/
import { useRecoilState } from "recoil";
import { useState } from "react";
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

//인터페이스는 함수밖으로


const ReqeustCards = () => {
    const [user, setUser] = useRecoilState(userData);
    const [post, setPost]=useState[];
    // const boards:boradsInfo(user)=()=>{
    const postList=useMemo(()=>{},)    

    // }

    
    
    return (
        <div>
            <Article>
                <ArtContainer>
                    <Contents>
                        <h3>{post.title}</h3>
                        <p>
                           {post.summary}
                        </p>
                    </Contents>
                    <Box>
                        <button>{post.like}</button>
                        <span>{post.vote}</span>
                    </Box>
                </ArtContainer>
                <DetailContainer>
                    <Details>
                        <li>
                            <span>작성자</span>{post.writer}
                        </li>
                        <li>
                            <i>
                                <Reply />
                            </i>
                            {post.comment}개의 댓글
                        </li>
                        <li>
                            <i>
                                <Views />
                            </i>
                            {post.viewcounts}views
                        </li>
                    </Details>
                    <Time>{post.timestamp}</Time>
                </DetailContainer>
            </Article>
        </div>
    );
};

export default ReqeustCards;
