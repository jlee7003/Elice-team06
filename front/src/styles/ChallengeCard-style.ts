import styled, { css } from "styled-components";
import { Props } from "@/components/ChallengeCard";
import cssUnit from "@/lib/cssUnit";
import assets from "@/lib/assets";
import icons from "@/lib/icons";
import ChallengeCardBg_Img from "@/assets/challengeCard_bgImg.png";
import calendarIcon from "@/assets/icons/calendar_icon.png";
import peopleIcon from "@/assets/icons/people_icon.png";

export const Card = styled.article<Props>`
    display: flex;
    flex-direction: column;

    /* width: 303px; */
    width: 298px;
    height: 285px;

    margin-top: 30px;
    border: 1px solid #eeeeee;
    border-radius: 24px;
    overflow: hidden;

    & + article {
        margin-left: 20px;
    }

    &:nth-child(5) {
        margin-left: 0px;
    }

    ${(props) =>
        props.mode == "Light"
            ? css`
                  background-color: #fff;
              `
            : css`
                  background-color: #ffffffba;
              `};
`;

export const CardUpper = styled.div<Props>`
    width: 100%;
    height: 40%;

    border-radius: 24px 24px 0 0;
    /* background-color: ${(props) =>
        props.level == "beginner"
            ? cssUnit.color.green
            : props.level == "intermediate"
            ? cssUnit.color.blue
            : props.level == "advanced"
            ? cssUnit.color.purple
            : cssUnit.color.gray}; */
    background-color: #eee;
    background-image: url(${ChallengeCardBg_Img});
    background-position: center 10px;
    background-size: 150px;
    background-repeat: no-repeat;
`;

export const CardLower = styled.div`
    width: auto;
    height: 60%;
    padding: 0 20px 20px;
`;

export const CardTitle = styled.h3<Props>`
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid #e9e9e9;
    padding: 10px 0;
    ${(props) =>
        props.mode == "Light"
            ? css`
                  color: black;
              `
            : css`
                  color: black;
              `};
`;

export const CardInfo = styled.div`
    padding: 10px 0 0;
    display: flex;
    justify-content: space-between;
`;

export const ChallengeDetail = styled.div`
    p {
        display: flex;
        color: #686868;
        span {
            height: 24px;
            background-repeat: no-repeat;
            & + span {
                padding-left: 5px;
            }
        }
        & + p {
            padding-top: 5px;
        }
    }
`;

export const CalendarIcon = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(${calendarIcon}) center;
    background-size: contain;
`;

export const PeopleIcon = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(${peopleIcon}) center;
    background-size: contain;
`;

export const ChallengeGrade = styled.div``;

export const ChallengeGradeLabel = styled.p<Props>`
    background-color: ${(props) =>
        props.level == "beginner"
            ? "#34c759"
            : props.level == "intermediate"
            ? "#007aff"
            : props.level == "advanced"
            ? "#5856d6"
            : "#000000"};
    width: 86px;
    text-align: center;
    border-radius: 50px;
    color: ${cssUnit.color.white};
    font-weight: ${cssUnit.fontWeight.bold};
    font-size: 12px;
    padding: 2px 0;
`;

export const ChallengeButtonBox = styled.div`
    padding: 15px 0 0;
`;
export const ChallengeButton = styled.div`
    width: 100%;
    background-color: #fff;
    color: #000;
    font-weight: ${cssUnit.fontWeight.bold};
    text-align: center;
    border-radius: 50px;
    line-height: 36px;
    cursor: pointer;
    border: 1px solid #000;
    /* box-shadow: 0 0 12px rgba(0, 0, 0, 0.2); */

    &:hover {
        /* background-color: #000; */
        background-color: #61be92;
        border-color: #61be92;
        color: #fff;
    }
`;
