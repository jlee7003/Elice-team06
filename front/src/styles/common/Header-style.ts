import styled, { css } from "styled-components";
import cssUnit from "@/lib/cssUnit";
import { Link } from "react-router-dom";
import { Props } from "@/components/common/Header";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: ${cssUnit.unit.width};
    min-width: 560px;
    height: 80px;
    margin: auto;
`;

export const HeaderSticky = styled.header<Props>`
    position: sticky;
    top: 0;
    width: 100%;
    height: 80px;
    margin: auto;
    background-color: #fff;
    /* box-shadow: 0 5px 10px rgb(0 0 0 / 20%); */

    z-index: 10;

    ${(props) =>
        props.mode == "Light"
            ? css`
                  background-color: white;
                  color: black;
                  border-bottom: 1px solid #eee;
                  label {
                      background-color: #282828;
                  }
                  label > div {
                      background-color: #cccccc;
                  }
              `
            : css`
                  background-color: #282828;
                  color: white;
                  border-bottom: 1px solid #3a3a3a;
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
    cursor: pointer;
    align-items: Center;
    height: 59px;
    font-size: ${cssUnit.fontSize.tittle};
    font-weight: normal;
    justify-content: center;
    text-align: center;
    margin-right: 54px;
    font-size: 18px;
`;

export const FlexBox = styled.div`
    display: flex;
    align-items: Center;
    height: 59px;
    justify-content: center;
    margin-right: 54px;
`;

export const HeaderSpace = styled.div`
    width: 83px;
    height: 59px;
    align-items: Center;
    font-size: ${cssUnit.fontSize.small};
    justify-content: center;
    text-align: center;
`;

export const HeaderAdminMenuItem = styled.div`
    width: 33%;
    align-items: Center;
    font-size: ${cssUnit.fontSize.tittle};
    justify-content: center;
    text-align: center;
`;
