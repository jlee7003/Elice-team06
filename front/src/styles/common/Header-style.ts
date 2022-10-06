import styled from "styled-components";
import { fontSize1, width } from ".";

export const HeaderContainer = styled.header`
    //add following scrolling (position, top, bc)

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${width};
    height: 80px;

    margin: auto;
    background-color: white;
`;
export const Header100 = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    height: 80px;

    margin: auto;
    background-color: white;
`;
export const HeaderMenuContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
`;

export const HeaderMenuItem = styled.div`
    height: 59px;
    display: flex;
    align-items: Center;
    font-size: 16px;
    justify-content: center;
    text-align: center;
`;
export const HeaderSpace = styled.div`
    width: 83px;
    height: 59px;
    align-items: Center;
    font-size: 16px;
    justify-content: center;
    text-align: center;
`;
export const HeaderAdminMenuItem = styled.div`
    width: 33%;
    align-items: Center;
    font-size: 20px;
    justify-content: center;
    text-align: center;
`;
