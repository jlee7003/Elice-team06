//lib
import { MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
/*styles*/
import { Nav, NaviLink } from "@/styles/pages/reqpage-style";
//real data
import { PostProps } from "@/types/post";

export const Paginations = (props: {
    value: PostProps;
    setCurrentPage: any;
    setCurrentRange: any;
    currentPageNumber: number;
    currentRangeNumber: number;
}) => {
    const navigate = useNavigate();

    const postList = props.value.PostList;

    //function for handling setter
    const settingCurrentPage = props.setCurrentPage;
    const currentPageNumber = props.currentPageNumber;

    const settingCurrentRange = props.setCurrentRange;
    const currentRangeNumber = props.currentRangeNumber;

    //null checking
    if (postList === null) {
        return;
    }
    if (Object.keys(postList).length > 0) {
        const limit = Object.keys(postList).length - 1;
    }

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        const { name } = e.target as HTMLButtonElement;
        const limit = Object.keys(postList).length;

        // << 를 눌렀을 때
        if (name === "prev") {
            console.log("왼쪽을 눌렸음");
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
                console.log("여기 지나갔어!");
                return settingCurrentRange((crr: number) => {
                    return crr + 1;
                });
            }
            return;
        }
        navigate(`/reqpage/pages/${parseInt(name)}`);
        settingCurrentPage(parseInt(name));
    };

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
