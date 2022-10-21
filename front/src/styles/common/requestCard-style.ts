import styled from "styled-components";
import cssUnit from "@/lib/cssUnit";
/*
lv 3 (articles, containter for bottom button, Links)
*/
//article
export const Article = styled.article`
    display: absolute;
    flex-direction: column;

    width: 100%;
    height: 190px;

    margin: 5px auto;
    padding: 10px;

    border: 1px solid #eeeeee;
    box-shadow: 0 0 3px rgb(0 0 0 / 10%);
    box-sizing: border-box;
    padding: 20px;
    /* &:hover {
        background-color: ${cssUnit.color.gray};
        box-shadow: 3px 3px 10px 2px ${cssUnit.color.darkergray};
    } */
`;

/*
lv 4 (divs for container,details,like)
*/
//content container for content(<h> and <p>) and box(like)
export const ArtContainer = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 70%;

    margin-bottom: 5px;
`;

//container for detail and time
export const DetailContainer = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 30%;

    color: #979797;
    font-size: 13px;
`;

/*
lv 5 content(<h> and <p>) and box(for like), details and time
*/
export const Contents = styled.div`
    //subejct and content
    display: flex;
    flex-direction: column;

    width: 90%;
    height: 60%;

    padding: 2px;

    & > h3 {
        margin-bottom: 5px;

        /* font-size: 20px; */
        font-size: 23px;
        text-align: left;
    }
    & > p {
        display: flex;
        width: 100%;
        margin: 2px;

        /* font-size: 15px; */
        font-size: 18px;
        color: #515151;
        text-align: left;
        padding-top: 7px;
    }
`;

export const Box = styled.div`
    //like (and dislike) buttons
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 10%;
    margin-left: 20px;
    margin-right: 20px;

    color: #979797;
    font-size: 13px;

    /* & > button {
        width: 40px;
        height: 40px;

        margin: auto;
        padding: 2px;

        border-radius: 50%;
        color: white;
        background-color: #61be92;

        font-size: 14px;
        writing-mode: horizontal-tb;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
    }
    & > span {
        height: 10px;
        margin: auto;

        font-size: 13px;

        cursor: pointer;
    } */
`;

export const Details = styled.ul`
    //detail informaitons
    display: flex;
    list-style: none;
    flex-direction: row;
    float: left;

    width: 80%;
    height: 80%;
    padding: 5px 0 0 5px;

    font-size: 12px;

    & > li {
        list-style: none;

        display: flex;
        float: left;
        flex-direction: row;

        margin: 0;

        font-size: 16px;
        vertical-align: baseline;
    }
    & > li > img {
        width: 20px;
        height: 20px;

        margin: 0 10px 0 0;

        vertical-align: middle;
    }
    & > li > i {
        width: 20px;
        height: 20px;

        margin: 0 10px 0 0;
        padding-top: 2px;
        padding-left: 5px;

        vertical-align: middle;
    }
    & > li > span {
        display: inline-block;

        height: 100%;
        margin: 0 10px 0 0;

        color: black;

        font-size: 15px;
        font-weight: 600;

        vertical-align: middle;
        &:last-child {
            /* font-size: 13px; */
            color: #979797;
        }
    }
`;
export const Time = styled.span`
    display: flex;
    float: right;
    justify-content: flex-end;

    //width: 20%;
    height: 100%;

    /* padding-top: 5px;
    padding-right: 10px; */

    font-size: 16px;
    vertical-align: middle;
`;

export const LikeButton = styled.button`
    width: 40px;
    height: 40px;

    margin: auto;
    padding: 2px;

    border-radius: 50%;
    color: white;
    background-color: #61be92;

    font-size: 14px;
    writing-mode: horizontal-tb;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
`;

export const DeleteButton = styled.button`
    margin: 0;

    //border: none;
    //border-radius: 4px;

    width: 40px;
    height: 15px;

    margin: auto;
    padding: auto;

    color: gray;
    //background-color: gray;

    /* font-size: 14px;
        writing-mode: horizontal-tb;
        text-align: center;
        font-size: 18px;
        font-weight: 600; */

    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    text-decoration: none;

    vertical-align: top;
`;
