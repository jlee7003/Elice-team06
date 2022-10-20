//lib
import { MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
/*styles*/
import { Nav, NaviLink } from "@/styles/pages/reqpage-style";
//real data
import { PostProps } from "@/types/post";

/**
 * postProps: boardPage 받아온 데이터뭉치 (중 하나는 바꿔야 함, 인터페이스까지)
 * setCurrentPage/Range: 현재 페이지와 range를 바꾸기 위한 함수를 받는 params
 * currentPageNumber/RangeNumber: 현재 페이지와 현재 range를 받는 parmas
 */
export const Paginations = (props: {
    value: PostProps;
    setCurrentPage: any;
    setCurrentRange: any;
    currentPageNumber: number;
    currentRangeNumber: number;
}) => {
    const navigate = useNavigate();

    //게시판에 들어갈 데이터들을 받아옴
    const postList = props.value.PostList;

    //function for handling setter
    const settingCurrentPage = props.setCurrentPage;
    const currentPageNumber = props.currentPageNumber;

    const settingCurrentRange = props.setCurrentRange;
    const currentRangeNumber = props.currentRangeNumber;

    //null checking
    if (postList === null) {
        return null;
    }
    if (Object.keys(postList).length > 0) {
        const limit = Object.keys(postList).length - 1;
    }

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        const { name } = e.target as HTMLButtonElement;
        const limit = Object.keys(postList).length;

        // << 를 눌렀을 때
        if (name === "prev") {
            if (currentRangeNumber - 1 <= 0) {
                return settingCurrentRange(1);
            }
            return settingCurrentRange((crr: number) => {
                return crr - 1;
            });
        }

        // >> 를 눌렀을 때
        if (name === "next") {
            if (5 * (currentRangeNumber + 1) < limit) {
                return settingCurrentRange((crr: number) => {
                    return crr + 1;
                });
            }
            return;
        }
        navigate(`/boardPage/pages/${parseInt(name)}`);
        settingCurrentPage(parseInt(name));
    };
    //교훈: button위에 span을 놓지 말자.
    return (
        <>
            {currentRangeNumber + 1 ? (
                <>
                    <Nav>
                        <ul>
                            <NaviLink name="prev" onClick={onClick}>
                                &lt;
                            </NaviLink>
                            {Object.keys(postList).map((post, idx) => {
                                return (
                                    <NaviLink
                                        key={idx}
                                        name={post}
                                        onClick={onClick}
                                        className={
                                            currentPageNumber === parseInt(post) ? "active" : ""
                                        }
                                    >
                                        {post}
                                    </NaviLink>
                                );
                            })}
                            <NaviLink name="next" onClick={onClick}>
                                &gt;
                            </NaviLink>
                        </ul>
                    </Nav>
                </>
            ) : (
                <></>
            )}
        </>
    );
};
