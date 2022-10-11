import styled from "styled-components";

interface StyleProps {
    bgColor?: string;
    bottom?: string;
    bgImg?: string;
}

export const ContainerWrap = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
`;

//--------------Header--------------
export const Header = styled.header`
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
    width: 100%;
    height: 80px;
    display: flex;
    z-index: 1;
    justify-content: space-between;
    background-color: transparent;
    p {
        background-color: transparent;
    }
`;

export const Logo = styled.p`
    height: 100%;
    line-height: 80px;
    width: 100px;
    text-align: center;
`;

export const Nav = styled.nav`
    height: 100%;
    line-height: 80px;
    width: 50%;
    max-width: 900px;
    display: flex;
    background-color: transparent;
    justify-content: space-around;
    p {
        a {
            white-space: nowrap;
        }
    }
`;

//--------------Slides Nav--------------

export const SectionNav = styled.ul`
    position: absolute;
    right: 50px;
    top: calc(50% - 90px);
    z-index: 2;
    height: 180px;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: transparent;
    align-items: flex-end;
    li {
        width: 100%;
        height: 20px;

        background-color: #d9d9d9;
        text-align: center;
        line-height: 20px;
        list-style: none;
        font-size: 12px;
        border-radius: 100px;
        padding: 0px 5px;
        box-sizing: content-box;
        transition: all 0.7s;
    }
`;

//--------- Slides Contents -----------
export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: teal;
    position: absolute;
    z-index: 0;
    left: 0;
    transition: all 0.7s;
`;

export const Section = styled.div<StyleProps>`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.bgColor};
    color: #fff;

    bottom: ${(props) => props.bottom};
    background-image: ${(props) => props.bgImg};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;

    h3 {
        width: 100%;
        text-align: center;
        font-size: 30px;
        margin-top: 10%;
        background-color: transparent;
    }
`;

export const CarbonGraph = styled.div`
    width: 60%;
    height: 50%;
    margin: 100px auto 0;
    background-color: #e8e8e8;
    opacity: 0.5;
    border-radius: 20px;
    max-width: 1093px;
`;

export const Section1Box = styled.div`
    margin: 400px auto 0;
    width: auto;
    height: 40%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: transparent;
    div {
        background-color: transparent;
        h2 {
            font-size: 50px;
            background-color: transparent;
            padding-bottom: 40px;
        }
        p {
            font-size: 20px;
            background-color: transparent;
        }
    }

    & > p {
        background-color: transparent;
        button {
            background-color: #8075bf;
            width: 330px;
            height: 60px;
            border: none;
            border-radius: 100px;
            cursor: pointer;
            font-size: 20px;
        }
    }
`;

export const Section3Box = styled.div`
    margin: 200px auto 0;
    width: auto;
    height: 40%;
    text-align: center;
    background-color: transparent;

    div {
        background-color: transparent;
        h2 {
            background-color: transparent;
            font-size: 50px;
            padding-bottom: 40px;
        }
        p {
            font-size: 20px;
            background-color: transparent;
        }
    }
`;

export const Section3Content = styled.div`
    height: 400px;
    max-width: 1093px;
    width: 60%;
    margin: 100px auto 0;
    display: flex;
    justify-content: space-between;
    ul {
        width: 30%;
        height: 100%;
        li {
            background-color: #cbcbcb;
            width: 100%;
            height: 120px;
            list-style: none;
            border-radius: 20px;
            line-height: 120px;
            white-space: nowrap;
            cursor: pointer;
            transition: all 0.4s;
            & + li {
                margin-top: 19px;
            }
            &:hover {
                background-color: #ababab;
            }
        }
    }
    p {
        background-color: #fff;
        border-radius: 20px;
        width: 65%;
        margin-left: 5%;
        height: 100%;
        color: #cbcbcb;
        line-height: 400px;
        text-align: center;
    }
`;

export const Section4Box = styled.div`
    margin: 150px auto 0;
    width: auto;
    height: 40%;
    text-align: center;

    h2 {
        font-size: 50px;
        padding-bottom: 40px;
        color: #000;
    }
    & > div {
        margin: 20px auto 0;
        max-width: 1093px;
        width: 60%;
    }
`;

export const ChallengeSlide = styled.div`
    height: 400px;
    width: 100%;
    background-color: #3c3c3c;
    color: #fff;
    text-align: center;
    line-height: 400px;
`;

export const ChallengeCurrent = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 180px;
    background-color: #fbfbfb;
    box-shadow: 0 0 1px rgba(0, 0, 0, 15);
`;
