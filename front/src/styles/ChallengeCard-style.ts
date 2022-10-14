import styled from "styled-components";
import { Props } from "@/components/ChallengeCard";
import cssUnit from "@/lib/cssUnit";
import assets from "@/lib/assets";
import icons from "@/lib/icons";

//assets
const ChallengeCardBgImg = assets("challengeCard_bgImg.png");

//icons
const calendarIcon = icons("calendar_icon.png");
const peopleIcon = icons("people_icon.png");

export const Card = styled.article`
    display: flex;
    flex-direction: column;

    width: 303px;
    height: 274px;

    border: 1px solid #eeeeee;
    border-radius: 24px;
`;

export const CardUpper = styled.div<Props>`
    width: 100%;
    height: 40%;

    border-radius: 24px 24px 0 0;
    background-color: ${(props) =>
        props.level == "beginner"
            ? cssUnit.color.green
            : props.level == "intermediate"
            ? cssUnit.color.blue
            : props.level == "advanced"
            ? cssUnit.color.purple
            : cssUnit.color.gray};
    background-image: url(${ChallengeCardBgImg});
    background-position: center 10px;
    background-size: 150px;
    background-repeat: no-repeat;
`;

export const CardLower = styled.div`
    width: auto;
    height: 60%;
    padding: 0 20px 20px;
`;

export const CardTitle = styled.h3`
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid #e9e9e9;
    padding: 10px 0;
`;

export const CardInfo = styled.div`
    padding: 10px 0 0;
    display: flex;
    justify-content: space-between;
`;

export const ChallengeDetail = styled.div`
    p {
        display: flex;
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
            ? cssUnit.color.green
            : props.level == "intermediate"
            ? cssUnit.color.blue
            : props.level == "advanced"
            ? cssUnit.color.purple
            : cssUnit.color.gray};
    width: 86px;
    text-align: center;
    border-radius: 50px;
    color: ${cssUnit.color.white};
    font-weight: ${cssUnit.fontWeight.bold};
    font-size: 12px;
    padding: 2px 0;
`;
