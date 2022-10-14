import styled from "styled-components";
import cssUnit from "@/lib/cssUnit";
export const Container = styled.div`
    display: grid;
    place-items: start center;
    width: ${cssUnit.unit.width};
    height: 100vh;
`;
export const CenterContainer = styled.div`
    display: flex;
    place-items: start center;
    width: 1275px;
    height: 100vh;
`;
export const Main = styled.div`
    display: grid;
    border: 0px solid black;
    width: 65%;
    height: 50vh;
`;
export const Sub = styled.div`
    border: 0px solid black;
    width: 35%;
    height: 100vh;
    padding: 15px;
`;
export const FlexBox = styled.div`
    display: flex;
`;
export const Title = styled.div`
    font-size: 40px;
    margin: 30px 0px 50px 0px;
    font-weight: bold;
`;
export const SubTitle = styled.div`
    font-size: 20px;
    margin: 15px 0px;
    font-weight: bold;
    & > span {
        font-size: 12px;
    }
`;
export const CommentContainer = styled.div`
    height: 40%;
    position: relative;
`;
export const TargetLabel = styled.div`
    font-size: ${cssUnit.fontSize.normal};
    margin: 15px 0px;
    color: #888888;
    font-weight: bold;
    white-space: pre-wrap;
    margin-right: 20px;
    & > span {
        font-size: 12px;
    }
`;
export const Contents = styled.div`
    font-size: ${cssUnit.fontSize.normal};
    margin: 15px 15px 100px 15px;
    white-space: pre-wrap;
    line-height: 35px;
`;
export const CommentBox = styled.div`
    display: grid;
    grid-template-columns: 10% 1fr 4fr;
    font-size: ${cssUnit.fontSize.normal};
    margin: 15px 15px 15px 15px;
    border: 1px solid #e8e8e8;
    border-radius: 10px;
    padding: 10px;
    width: 782px;
    height: 44px;
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
export const TopImage = styled.span`
    display: block;
    width: 100%;
    height: 181px;
    background-color: gray;
    padding: 10px 50px;
`;
export const OKButton = styled.button`
    all: unset;
    text-align: center;
    width: ${cssUnit.unit.formWidth};
    height: 50px;
    background-color: ${cssUnit.color.carbongreen};
    border: 0px solid #293e49;
    border-radius: 10px;
    margin: 20px 0px;
    color: white;
`;
export const Input = styled.input`
    width: ${cssUnit.unit.formWidth};
    height: 62px;
    border: 1px solid #d9d9d9;
    background-color: #fbfbfb;
    margin: 20px 0px 0px 0px;
    padding: 10px;
    &::placeholder {
        font-size: ${cssUnit.fontSize.normal};
    }
`;
export const CommentButton = styled.button`
    all: unset;
    margin-top: 10px;
    text-align: center;
    width: ${cssUnit.unit.formWidth};
    height: 50px;
    background-color: #fbfbfb;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    color: #939393;
`;
