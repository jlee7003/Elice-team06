import styled from "styled-components";
import cssUnit from "@/lib/cssUnit";

export const TeamName = styled.span`
    margin-left: 40px;

    font-weight: light;
    font-style: italic;
    color: gray;

    font-size: ${cssUnit.fontSize.small};
`;

export const Gitlab = styled.a.attrs({
    href: "https://kdt-gitlab.elice.io/ai_track/class05/data_project/team06",
    target: "_blank",
})`
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
    position: sticky;
    width: 100%;
    height: 100px;
    z-index: 1;
    background-color: #343434;
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: ${cssUnit.unit.width};
    height: 100%;

    margin: auto;

    color: white;
`;
