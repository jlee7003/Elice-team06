import styled from "styled-components";
import { fontSize1, width } from ".";

export const HeaderContainer = styled.header`
    //add following scrolling (position, top, bc)
    position: sticky;
    top: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${width};
    height: 138px;

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
    font-size: 26px;
    justify-content: center;
    text-align: center;
`;
export const HeaderAdminMenuItem = styled.div`
    width: 33%;
    align-items: Center;
    font-size: 26px;
    justify-content: center;
    text-align: center;
`;
