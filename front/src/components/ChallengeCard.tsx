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
export type Level = "beginner" | "intermediate" | "advanced" | "default";

export interface Props {
    id?: number;
    level?: Level;
    // grade?: true;
    title?: string;
    date?: string;
    count?: number;
}

export interface Props {
    mode?: string;
}

const ChallengeCard = (props: Props) => {
    const [darkMode] = useRecoilState(DarkMode);
    const navigate = useNavigate();
    const token = sessionStorage.getItem("refresh");

    return (
        <Card>
            <CardUpper level={props.level ?? "default"} />
            <CardLower>
                <CardTitle mode={darkMode ?? "Light"}>{props.title}</CardTitle>
                <CardInfo>
                    <ChallengeDetail>
                        <p>
                            <CalendarIcon></CalendarIcon>
                            <span>{props.date}</span>
                        </p>
                        <p>
                            <PeopleIcon></PeopleIcon>
                            <span>{props.count}명의 도전자</span>
                        </p>
                    </ChallengeDetail>
                    <ChallengeGrade>
                        {/* {props.grade && ( */}
                        <ChallengeGradeLabel level={props.level ?? "default"}>
                            {props.level}
                        </ChallengeGradeLabel>
                        {/* )} */}
                    </ChallengeGrade>
                </CardInfo>
                <ChallengeButtonBox>
                    <ChallengeButton
                        onClick={() => {
                            // navigate("/challenge/challengedetail", props.id);
                            navigate("/challenge/challengedetail", {
                                state: {
                                    id: props.id,
                                },
                            });
                        }}
                    >
                        도전하기
                    </ChallengeButton>
                </ChallengeButtonBox>
            </CardLower>
        </Card>
    );
};

export default ChallengeCard;
