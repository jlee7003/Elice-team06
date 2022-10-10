import styled from "styled-components";
import cssUnit from "@/lib/cssUnit";

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    width: ${cssUnit.unit.width};
    height: 70vh;
    padding-top: 70px;
`;

/*main*/
export const ChallengeContainter = styled.main`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 80%;
`;

/*내가 도전한 챌린지*/
export const MyChallenges = styled.section`
    display: flex;
    flex-direction: column;

    & > p {
        margin-bottom: 15px;
    }
    & > div {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`;

/*투표한 챌린지*/
export const LikeChallenges = styled.section`
    display: flex;
    flex-direction: column;

    & > p {
        margin-bottom: 15px;
    }
`;

export const Boards = styled.article``;

/*aside*/
export const SideBar = styled.aside`
    height: 30vh;
    width: 20%;
    padding: 10px;
    border: 0.5px solid gray;
    margin: 20px;
`;

export const MySec = styled.section`
    display: flex;
    flex-direction: column;
    height: 20%;
    & > p {
        font-size: 20px;
    }
`;

export const Menus = styled.section`
    display: flex;
    flex-direction: column;
    height: 10%;
`;

export const Buttons = styled.button`
    display: block;
    height: 20%;
    margin: 5px;
`;
