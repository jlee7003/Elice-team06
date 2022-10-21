import cssUnit from "@/lib/cssUnit";
import styled from "styled-components";

export const AdminContainer = styled.section`
    /* display: grid;
    place-items: center; */

    width: 100%;
    height: 100%;
`;

export const AdminBox = styled.div`
    width: 100%;
    height: 100%;
    /* border: 1px solid #cbcbcb; */
`;

export const AdminBoxHeader = styled.div`
    display: flex;
    justify-content: center;

    position: relative;

    width: 100%;
    /* height: 30%; */
    padding-bottom: 80px;
    font-weight: 600;
`;

export const AdmintBoxNav = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
`;

export const AdminBoxNavButton = styled.button`
    color: #000;
    font-size: 20px;
    background-color: #fff;
    border: 1px solid #000;
    padding: 15px 30px;
    box-sizing: border-box;
    border-radius: 20px;
    & + & {
        margin-left: 30px;
    }
`;

export const AdminTitle = styled.span`
    width: fit-content;
    height: 30%;

    color: #000;
    font-size: ${cssUnit.fontSize.large};
`;

export const AdminButton = styled(AdminTitle)`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #61be92;
    font-size: 20px;
    color: #fff;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    border-radius: 20px;
    cursor: pointer;
    i {
        vertical-align: -3px;
        padding-right: 5px;
    }
`;

export const DataWrap = styled.div`
    width: 100%;
    border: 1px solid #eee;
    background-color: #f0f0f0;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 20px;
    height: 700px;
    overflow-y: auto;
    margin-top: 50px;
`;

export const DataBox = styled.div`
    width: 100%;
    height: fit-content;

    overflow-y: scroll;
    border-bottom: 1px solid #d7d7d7;
    padding: 10px 0;
    margin: 10px 0;
    background-color: #fff;
    text-indent: 20px;
    border-radius: 8px;

    &:first-child {
        margin-top: 0;
    }
`;

export const DataLow = styled.span`
    color: #000;
    font-size: ${cssUnit.fontSize.medium};
    &:first-child {
        padding-right: 10px;
        color: #61be92;
    }
    & + span {
        padding-left: 10px;
    }
`;

export const Background = styled.div``;
