import { useRecoilState } from "recoil";
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
import DarkMode from "@/recoil/darkMode";
import { useNavigate } from "react-router-dom";
type Level = "beginner" | "intermediate" | "advanced" | "default";

export interface Props {
    level?: Level;
    grade?: true;
}

export interface Props {
    mode?: string;
}

const ChallengeCard = (props: Props) => {
    const [darkMode] = useRecoilState(DarkMode);
    const navigate = useNavigate();
    const token = sessionStorage.getItem("refresh");

    return (
        <Card
            onClick={() => {
                navigate("/challenge/challengedetail");
            }}
        >
            <CardUpper level={props.level ?? "default"} />
            <CardLower>
                <CardTitle mode={darkMode ?? "Light"}>자전거 이용하기</CardTitle>
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
                        {props.grade && (
                            <ChallengeGradeLabel level={props.level ?? "default"}>
                                초급 도전
                            </ChallengeGradeLabel>
                        )}
                    </ChallengeGrade>
                </CardInfo>
                <ChallengeButtonBox>
                    <ChallengeButton>도전하기</ChallengeButton>
                </ChallengeButtonBox>
            </CardLower>
        </Card>
    );
};

export default ChallengeCard;
