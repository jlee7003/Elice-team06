import styled from "styled-components";
import { fontSize1, width } from ".";

export const TeamName = styled.span`
    margin-left: 40px;

    font-weight: bold;

    ${fontSize1}
`;

export const Gitlab = styled.a.attrs({
    href: "https://kdt-gitlab.elice.io/ai_track/class05/data_project/team06",
    target: "_blank",
})`
    ${fontSize1}

    & > svg {
        width: 55px;
        height: 55px;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const FooterBackground = styled.footer`
    width: 100%;
    height: 100px;

    background-color: #343434;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${width};
    height: 138px;

    margin: auto;
`;

export const HeaderMenuContainer = styled.div`
    width: 50%;
    display: flex;
    justifycontent: flex-end;
    marginright: 10px;
`;

export const HeaderMenuItem = styled.div`
    width: 33%;
    align-items: Center;
    font-size: 26px;
    justify-content: center;
    text-align: center;
`;
