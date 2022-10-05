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
    width: 50%;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
`;

export const HeaderMenuItem = styled.div`
    width: 33%;
    align-items: Center;
    font-size: 20px;
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
