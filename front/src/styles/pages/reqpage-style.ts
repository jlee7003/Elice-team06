import styled from "styled-components";
import { Link } from "react-router-dom";
import { width } from "../common";

/*
lv 0 (div, for background container)->main
*/
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    ${width};
    height: 900px;
    padding-top: 70px;
`;

/*
lv 1(main)->section,nav
*/
//main
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${width};
    height: 720px;
`;

/*
lv 2 (section, nav)->[article,container], Links
*/

//section
export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${width};
    height: 90%;
    margin: auto;
    padding: 5px;
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

    & > ul {
        color: #979797;
        text-align: center;
    }
`;

/*
lv 3 (articles, containter for bottom button, Links)
*/
//article
//container for bottom button
export const ButtonContianer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    height: 120px;

    & > button {
        display: flex;
        float: right;
        vertical-align: middle;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100%;
        margin: 5px;
        background-color: #61be92;
        color: white;
        font-size: 14px;
        text-align: center;
    }
`;
//nav's Links
export const NavLink = styled(Link)`
    display: inline;
    margin: 15px;
    font-size: 16px;
    text-decoration: none;
    & > span {
        display: inline;
        margin: 10px;
        font-weight: bolder;
    }
`;
/*
lv 4 (divs for container,details,like)
*/

/*
lv 5 content(<h> and <p>) and box(for like), details and time
*/
