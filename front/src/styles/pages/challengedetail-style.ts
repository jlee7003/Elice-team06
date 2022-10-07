import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    place-items: start center;

    width: 100vw;
    height: 100vh;
`;
export const CenterContainer = styled.div`
    display: flex;
    place-items: start center;

    width: 1275px;
    height: 100vh;
`;
export const Main = styled.div`
    /* display: grid; */
    /* place-items: start center; */
    border: 1px solid black;
    width: 65%;
    /* height: 984px; */
    height: 100vh;
`;

export const Sub = styled.div`
    display: grid;
    place-items: start center;
    border: 1px solid black;
    width: 35%;
    /* height: 984px; */
    height: 100vh;
`;
export const Title = styled.div`
    font-size: 40px;
    margin: 30px 0px 50px 0px;
`;
export const SubTitle = styled.div`
    font-size: 20px;
    margin: 15px 0px;

    & > span {
        font-size: 12px;
    }
`;
export const Contents = styled.div`
    font-size: 14px;
    margin: 15px 15px 50px 15px;
    white-space: pre-wrap;
    line-height: 30px;
`;
export const Comment = styled.div`
    font-size: 14px;
    margin: 15px 15px 50px 15px;
    border: 1px solid #e8e8e8;
    border-radius: 10px;
    width: 782px;
    height: 44px;
`;

export const BoardCard = styled.div`
    width: 1275px;
    height: 171px;
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
