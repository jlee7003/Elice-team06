import styled from "styled-components";
import cssUnit from "@/lib/cssUnit";
import icons from "@/lib/icons";

const settingIcon = icons("setting_icon.png");
const challengIcon = icons("challenges_gray_icon.png");
const userIcon = icons("user_icon.png");

export const Container = styled.div`
    /* display: grid;
    place-items: center; */
    display: flex;
    flex-direction: row;
    position: relative;

    //width: auto;
    width: ${cssUnit.unit.width};
    height: auto;

    padding-top: 70px;
    padding-bottom: 100px;
    margin: auto;
    overflow: hidden;
`;
/*aside*/
export const SideBar = styled.aside`
    width: 20%;
    height: 600px;

    padding: 10px;
    margin: 0 10px 0 10px;

    //border: 0.5px solid gray;
`;

export const MySec = styled.section`
    display: flex;
    flex-direction: column;

    height: 20%;

    /* & > p {
        margin: 10px;
        font-size: 20px;
    } */

    & > span {
        display: flex;
        flex-direction: row;

        margin: 10px;

        font-size: ${cssUnit.fontSize.small};
        color: ${cssUnit.color.darkergray};
    }

    & > span > p {
        width: 90%;

        font-size: ${cssUnit.fontSize.normal};
        color: ${cssUnit.color.black};
    }

    & > span > span {
        display: inline-block;

        width: 10%;
        height: 20px;

        background: url(${settingIcon}) center;
        background-size: contain;

        /* width: 20%;
        height: 100%;
        margin: 0;
        vertical-align: middle; */
    }
`;

/**Side Menu */
export const MenuContainer = styled.section`
    display: flex;
    flex-direction: column;

    height: 450px;
    padding-top: 20%;
`;

export const Menu = styled.article`
    display: block;

    height: 40%;
    margin: 5px;

    & > span {
        display: block;

        height: 40px;

        margin: 0px;
        padding: 7px 10px 2px;

        border-radius: 0.5em;
        background-color: ${cssUnit.color.green};

        font-size: ${cssUnit.fontSize.normal};
        color: white;
        text-align: right;
    }
`;
//menu buttons
export const Buttons = styled.button`
    display: block;
    float: right;

    width: 70%;
    height: 30px;

    padding: 2px 10px 2px;
    margin: 3px 0 0 3px;

    border: 1px solid ${cssUnit.color.gray};
    background-color: ${cssUnit.color.white};

    font-size: 12px;
    color: ${cssUnit.color.darkergray};
    text-align: right;
`;
/** icons */
export const ChallengeIcon = styled.span`
    display: inline-block;

    width: 10%;
    height: 20px;

    //margin-top: 5px;
    margin-right: 5px;

    background: url(${challengIcon}) center;
    background-size: contain;
    background-repeat: no-repeat;
`;
export const UserIcon = styled.span`
    display: inline-block;

    width: 10%;
    height: 20px;

    //margin-top: 5px;
    margin-right: 5px;

    background: url(${userIcon}) center;
    background-size: contain;
    background-repeat: no-repeat;
`;

/*main*/
export const ChallengeContainter = styled.main`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    width: 80%;
    height: 80%;

    /* display: flex;
    flex-direction: column;
    width: 80%;
    height: 80%; */
`;

/*내가 도전한 챌린지*/
export const MyChallenges = styled.section`
    display: flex;
    flex-direction: column;

    & > p {
        margin-bottom: 15px;
    }
    /* & > div {
        display: flex;

        width: 100%;
        margin-bottom: 100px;

        justify-content: space-between;
    } */
`;

/*도전 박스*/
export const CategoryContent = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    & > article {
        margin-left: 20px;
        &:first-child {
            margin-left: 0px;
        }
        &:nth-child(4n + 0) {
            margin-left: 0px;
        }
        &:nth-child(5) {
            margin-left: 20px;
        }
    }
`;

/*투표한 챌린지*/
export const LikeChallenges = styled.section`
    display: flex;
    flex-direction: column;
    height: 500px;
    overflow-y: scroll;
    overflow-x: hidden;
    &:-webkit-scrollbar {
        display: none;
    }
    & > p {
        margin-bottom: 15px;
    }
`;

export const BoardsContainer = styled.section`
    width: 100%;
    height: 100%;
`;
