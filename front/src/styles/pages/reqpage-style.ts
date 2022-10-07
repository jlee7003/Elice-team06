import styled from "styled-components";
import { Link } from "react-router-dom";
import { width, fontSize2 } from "../common";

/*
lv 1 (div, main)
*/
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    ${width};
    height: 90vh;
    padding-top: 70px;
    border: 2px solid gray;
`;

/* main */
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 90%;
    border: 0.6px solid blue;
`;

/*
lv 2 (section, nav)
*/

//section
export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 99%;
    height: 90%;
    margin: auto;
    padding: 5px;
    border: 0.6px solid red;
`;

//nav

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 99%;
    height: 10%;
    margin: auto;
    padding: 5px;
    border: 0.6px solid greenyellow;

    & > ul {
        text-align: center;
    }
    & > span {
        display: inline;
        margin: 10px;
    }
`;

/*
lv 3 (article, Links)
*/
export const Article = styled.article`
    display: absolute;
    flex-direction: column;
    width: 100%;
    height: 20%;
    margin: 5px auto;
    padding: 10px;
    border: 0.6px solid green;
`;

export const NavLink = styled(Link)`
    display: inline;
    font-size: 20px;
    margin: 5px;
    text-decoration: none;
`;

/*
lv 4 (divs for sapce[h&p],details,like)
*/
//content container for content and box
export const ArtContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70%;
`;

//container for detail and time
export const DetailContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 30%;
`;

//lv5 ([contents&box],[details&time])
export const Contents = styled.div`
    //subejct and content
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 60%;
    padding: 2px;

    & > h3 {
        text-align: left;
    }
    & > p {
        display: flex;
        text-align: left;
        margin: 2px;
    }
`;

export const Box = styled.div`
    //like (and dislike) buttons
    display: flex;
    width: 20%;
    height: 100%;
    padding: 2px;
    flex-direction: column;
    justify-content: center;
    & > button {
        display: block;
        width: 50%;
        height: 70%;
        margin: auto;
        background-color: black;
    }
    & > span {
        margin: auto;
    }
`;

export const Details = styled.ul`
    //detail informaitons
    display: flex;
    float: left;
    flex-direction: row;
    width: 80%;
    height: 100%;
    padding: 5px 0 0 5px;
    list-style: none;

    & > li {
        display: flex;
        flex-direction: row;
        float: left;
        list-style: none;
        vertical-align: middle;
        margin: 0 10px 0 0;
    }
    & > li > i {
        display: flex;
        width: 10px;
        height: 10px;
        vertical-align: middle;
        margin: 0 20px 0 0;
    }
    & > li > span {
        margin: 0 10px 0 0;
        display: inline-block;
        vertical-align: middle;
    }
`;
export const Time = styled.span`
    display: flex;
    float: right;
    height: 100%;
`;
//lv 5 button, icon, and texts -> INSIDE?
export const Title = styled.h2``; //title

export const Summary = styled.p`
    //summary
`;

export const Writer = styled.span`
    //spans for details
`;

export const Text = styled.span``;
export const LikeButton = styled.button`
    //button for (dis)like,
`;
export const Numbers = styled.span``;
