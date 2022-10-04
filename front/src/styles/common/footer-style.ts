import styled from "styled-components";
import { main } from ".";

export const TeamName = styled.span`
    margin-left: 40px;

    font-weight: bold;

    ${main.fontSize}
`;

export const Gitlab = styled.a.attrs({
    href: "https://kdt-gitlab.elice.io/ai_track/class05/data_project/team06",
    target: "_blank",
})`
    ${main.fontSize}

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

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${main.width};
    height: 100%;

    margin: auto;

    color: white;
`;
