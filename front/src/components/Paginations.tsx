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

    //null checking
    if (postLists === null) {
        return null;
    }
    // if (Object.keys(postLists).length > 0) {
    //     const limit = Object.keys(postLists).length - 1;
    // }

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        const { name } = e.target as HTMLButtonElement;
        const limit = Object.keys(postLists).length;

        // << 를 눌렀을 때
        if (name === "prev") {
            console.log("여기오니?");
            console.log("currentRangeNumber", currentRangeNumber);
            if (currentRangeNumber - 1 <= 0) {
                setCurrentPage(1);
                console.log("setCurrentPage(1) 했는데.", currentPageNumber);
                return navigate(`/community/pages/${currentPageNumber}`);
            }
            return setCurrentRange((crr: number) => {
                //settingCurrentPage(1);
                //return navigate(`/community/pages/${currentPageNumber-5}`);

                return;
            });
        }

        // >> 를 눌렀을 때
        if (name === "next") {
            if (5 * (currentRangeNumber + 1) < 10) {
                return setCurrentRange((crr: number) => {
                    return crr + 1;
                });
            }
            return;
        }
        setCurrentPage(parseInt(name));
        navigate(`/community/pages/${parseInt(name)}`);
    };
    //교훈: button위에 span을 놓지 말자.

    console.log(postLists);
    return (
        <>
            {postLists ? (
                <>
                    <Nav>
                        <ul>
                            <NaviLink name="prev" onClick={onClick}>
                                &lt;
                            </NaviLink>
                            {Object.keys(postLists).map((post, idx) => {
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
