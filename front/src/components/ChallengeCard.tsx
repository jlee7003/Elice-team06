import {
    Card,
    CardUpper,
    CardLower,
    CardTitle,
    CardInfo,
    ChallengeDetail,
    ChallengeGrade,
    ChallengeGradeLabel,
    CalendarIcon,
    PeopleIcon,
    ChallengeButtonBox,
    ChallengeButton,
} from "@/styles/ChallengeCard-style";
import { useNavigate } from "react-router-dom";

type Level = "beginner" | "intermediate" | "advanced" | "default";

export interface Props {
    level?: Level;
}

const ChallengeCard = (props: Props) => {
    const navigate = useNavigate();

    return (
        <Card onClick={() => navigate("/challenge/challengedetail")}>
            <CardUpper level={props.level ?? "default"} />
            <CardLower>
                <CardTitle>자전거 이용하기</CardTitle>
                <CardInfo>
                    <ChallengeDetail>
                        <p>
                            <CalendarIcon></CalendarIcon>
                            <span>10/01~11/10</span>
                        </p>
                        <p>
                            <PeopleIcon></PeopleIcon>
                            <span>1,000명의 도전자</span>
                        </p>
                    </ChallengeDetail>
                    <ChallengeGrade>
                        <ChallengeGradeLabel level={props.level ?? "default"}>
                            초급 도전
                        </ChallengeGradeLabel>
                    </ChallengeGrade>
                </CardInfo>
                <ChallengeButtonBox>
                    <ChallengeButton type="button">도전하기</ChallengeButton>
                </ChallengeButtonBox>
            </CardLower>
        </Card>
    );
};

export default ChallengeCard;
