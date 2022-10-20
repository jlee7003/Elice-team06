import styled from "styled-components";
import cssUnit from "@/lib/cssUnit";
export const Container = styled.div`
    display: grid;
    place-items: start center;
    width: auto !important;
`;
export const CenterContainer = styled.div`
    display: flex;
    place-items: start center;
    width: 1275px;
    height: 1050px;
    padding-bottom: 50px;
`;
export const Main = styled.div`
    display: grid;
    width: 65%;
    height: 70vh;
    border: 0px solid black;
`;
export const Sub = styled.div`
    width: 35%;
    height: 70vh;
    padding: 15px;
    border: 0px solid black;
`;
export const FlexBox = styled.div`
    display: flex;
`;
export const Title = styled.div`
    margin: 30px 0px 50px 0px;
    font-size: 40px;
    font-weight: bold;
`;
export const SubTitle = styled.div`
    margin: 25px 0px;
    font-size: 20px;
    font-weight: bold;
    & > span {
        display: inline-block;
        padding-left: 20px;
        color: #5a5a5a;
        font-size: 18px;
    }
`;
export const CommentContainer = styled.div`
    position: block;
    height: 40%;
`;
export const TargetLabel = styled.div`
    margin: 15px 0px;
    margin-right: 20px;
    font-size: ${cssUnit.fontSize.normal};
    font-weight: bold;
    color: #888888;
    white-space: pre-wrap;
    & > span {
        font-size: 12px;
    }
`;
export const Contents = styled.div`
    max-height: 300px;
    width: 815px;
    margin: 15px 15px 100px 0;
    font-size: ${cssUnit.fontSize.normal};
    line-height: 35px;
    white-space: pre-wrap;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: hidden;
`;
export const NoComments = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 270px;
    color: #888888;
    font-size: 28px;
    white-space: pre-wrap;
`;
export const CommentBox = styled.div`
    display: grid;
    grid-template-columns: 10% 1fr 4fr;
    width: 782px;
    height: 44px;
    padding: 10px;
    margin: 15px 15px 15px 15px;
    border: 1px solid #e8e8e8;
    border-radius: 10px;
    font-size: ${cssUnit.fontSize.normal};
`;
export const BoardCard = styled.div`
    width: ${cssUnit.unit.width};
    height: 171px;
    border: 1px solid #dddddd;
    background-color: #ffffff;
    margin: 10px;
`;
export const Graph = styled.div`
    width: 400px;
    height: 256px;
    border: 1px solid #dddddd;
    background-color: #ffffff;
    margin: 10px;
`;
// export const TopImage = styled.span`
//     display: block;
//     width: 100%;
//     height: 181px;
//     background-color: gray;
//     padding: 10px 50px;
// `;
export const OKButton = styled.button`
    all: unset;
    width: ${cssUnit.unit.formWidth};
    height: 50px;
    background-color: ${cssUnit.color.carbongreen};
    border: 0px solid #293e49;
    border-radius: 10px;
    margin: 20px 0px;
    color: white;
    text-align: center;
`;
export const Input = styled.input`
    width: ${cssUnit.unit.formWidth};
    height: 102px;
    border: 1px solid #d9d9d9;
    background-color: #fbfbfb;
    margin: 30px 0px 10px 0px;
    padding: 10px;
    &::placeholder {
        font-size: ${cssUnit.fontSize.normal};
    }
`;
export const CommentButton = styled.button`
    all: unset;
    width: ${cssUnit.unit.formWidth};
    height: 50px;
    margin-top: 10px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    background-color: #fbfbfb;
    color: #939393;
    text-align: center;
`;
