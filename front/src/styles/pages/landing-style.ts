import styled from "styled-components";

interface StyleProps {
    bgColor?: string;
    bottom?: string;
}

export const ContainerWrap = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
`;

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: teal;
    position: absolute;
    left: 0;
    transition: all 0.7s;
`;

export const Section = styled.div<StyleProps>`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.bgColor};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    //ready for one page

    bottom: ${(props) => props.bottom};
    //동적으로 못들어감
    /*
        읽고 끝임
        업데이트 안됨
    */

    //왜 100%? - 하다보면 이유 나올듯
    &:first-child {
        bottom: 0;
    }
`;
