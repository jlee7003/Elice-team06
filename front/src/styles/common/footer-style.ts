import styled, { css } from "styled-components";
import cssUnit from "@/lib/cssUnit";
import { Props } from "@/components/common/Footer";

export const TeamName = styled.span`
    margin-left: 40px;

    font-weight: light;
    font-style: italic;
    color: #fff;
    background-color: #61be92;
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
    background-color: #61be92;
`;

export const FooterBackground = styled.footer<Props>`
    width: 100%;
    height: 100px;
    z-index: 1;
    background-color: #61be92;

    /* position: absolute; */
    bottom: 0;
    ${(props) =>
        props.mode == "Light"
            ? css`
                  opacity: 0.3;
              `
            : css`
                  opacity: 1;
              `};
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: ${cssUnit.unit.width};
    min-width: 560px;
    height: 100%;
    background-color: #61be92;
    margin: auto;

    color: white;

    //position: absolute;
`;
