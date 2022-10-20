import styled from "styled-components";
import { Link } from "react-router-dom";
import cssUnit from "@/lib/cssUnit";

/*
lv 0 (div, for background container)->main
*/
export const Container = styled.div`
    height: 1600px;
    margin: 0;
    padding: 0;

    z-index: 7;
`;

export const GridContainer = styled.div`
    display: grid;

    //align-items: center;
    justify-content: center;
    justify-items: start;

    /* height: 1600px; */
    height: 1300px;
    margin: 0;
    padding: 0;

    z-index: 6;

    place-items: center;
    /* display: flex;
    flex-direction: row; */
    /* width: ${cssUnit.unit.width};
    height: 900px; */
    /* width: auto !important;
    height: auto !important;
    padding-top: 70px; */
`;

/*
lv 1(main)->section,nav
*/
//main
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: ${cssUnit.unit.width};
    height: 1200px;
    padding-bottom: 200px;
    z-index: 5;
`;

/*
lv 2 (section, nav)->[article,container], Links
*/

//section
export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: ${cssUnit.unit.width};
    height: 1100px;
    margin: 10px;
    padding: 5px;

    z-index: 4;
`;

//nav
export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 99%;
    height: 100px;

    margin: 2px;

    z-index: 4;

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

    width: 1200px;
    height: 40px;

    margin-top: 10px;
    margin-left: 30px;

    z-index: 3;

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

        &:hover {
            box-shadow: 3px 3px 2px 2px ${cssUnit.color.darkergray};
        }
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
export const NaviLink = styled.button`
    display: inline;
    margin: 10px;

    font-size: 20px;
    text-decoration: none;
    cursor: pointer;

    &.active {
        font-weight: bold;
        color: #61be92;
    }

    & > span {
        display: inline;
        margin: 10px;
        font-weight: bolder;
        cursor: pointer;
    }
    &:hover {
        font-weight: bold;
        color: #61be92;
    }
`;
/*
lv 4 (divs for container,details,like)
*/

/*
lv 5 content(<h> and <p>) and box(for like), details and time
*/
