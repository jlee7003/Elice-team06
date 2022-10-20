import styled, { css } from "styled-components";
import cssUnit from "@/lib/cssUnit";
import { Link } from "react-router-dom";
import { Props } from "@/components/common/Header";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: ${cssUnit.unit.width};
    height: 80px;
    margin: auto;
`;

export const HeaderSticky = styled.header<Props>`
    position: sticky;
    top: 0;
    width: 100%;
    height: 80px;
    margin: auto;
    z-index: 1;

    ${(props) =>
        props.mode == "Light"
            ? css`
                  color: black;
                  label {
                      background-color: #282828;
                  }
                  label > div {
                      background-color: #cccccc;
                  }
              `
            : css`
                  color: white;
                  label {
                      background-color: white;
                  }
                  label > div {
                      background-color: #838383;
                  }
              `}
`;

export const HeaderMenuContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    &:last-child {
        margin-right: 0px;
    }
`;

export const HeaderMenuItem = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: Center;
    margin-right: 54px;
    height: 59px;
    font-size: ${cssUnit.fontSize.tittle};
    font-weight: normal;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
`;

export const FlexBox = styled.div`
    display: flex;
    align-items: Center;
    height: 59px;
    justify-content: center;
    margin-right: 54px;
`;

export const HeaderSpace = styled.div`
    justify-content: center;
    align-items: Center;
    width: 83px;
    height: 59px;
    font-size: ${cssUnit.fontSize.small};
    text-align: center;
`;

export const HeaderAdminMenuItem = styled.div`
    justify-content: center;
    align-items: Center;
    width: 33%;
    font-size: ${cssUnit.fontSize.tittle};
    text-align: center;
`;
