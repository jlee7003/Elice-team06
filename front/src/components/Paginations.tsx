//lib
import { MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
/*styles*/
import { Nav, NaviLink } from "@/styles/pages/reqpage-style";
//real data
import { PostProps } from "@/types/post";

export const Paginations = (props: { value: PostProps; setCurrentPage: any }) => {
    const navigate = useNavigate();
    const postList = props.value.PostList;
    const pageData = props.value.PageData;
    const setCurrentPage = props.setCurrentPage;
    //null checking
    if (postList === null) {
        return;
    }
    if (Object.keys(postList).length > 0) {
        const limit = Object.keys(postList).length - 1;
    }

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        const { name } = e.target as HTMLButtonElement;
        if (name === "prev") {
            if (pageData.start - pageData.range < 0) {
                pageData.start = 1;
            }
            pageData.start = pageData.start - pageData.range; //start
            return navigate(`/reqpage/pages/1`);
        }
        if (name === "next") {
            const limit = Object.keys(postList).length - 1;
            if (pageData.end + pageData.range > limit) {
                pageData.start = limit - pageData.range;
            }
            pageData.start = pageData.start + pageData.range; //start
            console.log("pageData.end", pageData.end);
            return navigate(`/reqpage/pages/${limit}`);
        }
        console.log("parseInt(name)", parseInt(name));
        setCurrentPage(parseInt(name));
        return navigate(`/reqpage/pages/${name}`);
    };

    return (
        <Nav>
            <ul>
                <NaviLink name="prev" onClick={onClick}>
                    <span>&lt;</span>
                </NaviLink>
                {Object.keys(postList).map((post, idx) => {
                    return (
                        <NaviLink key={idx} name={post} onClick={onClick}>
                            {post}
                        </NaviLink>
                    );
                })}
                <NaviLink name="next " onClick={onClick}>
                    <span>&gt; </span>
                </NaviLink>
            </ul>
        </Nav>
    );
};
