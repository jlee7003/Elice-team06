import { useRecoilState, useRecoilValue } from "recoil";
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
import { userState } from "@/recoil/user";
import sendToast from "@/lib/sendToast";

export type Level = "beginner" | "intermediate" | "advanced" | "default";

export interface Props {
    id?: number;
    level?: Level;
    title?: string;
    date?: string;
    count?: number;
}

export interface Props {
    mode?: string;
}

type LevelData = Record<Level, String>;

const levelData: LevelData = {
    default: "기본",
    beginner: "초급",
    intermediate: "중급",
    advanced: "고급",
};

const ChallengeCard = (props: Props) => {
    const user = useRecoilValue(userState);
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
                        <ChallengeGradeLabel level={props.level ?? "default"}>
                            {levelData[props.level]}
                        </ChallengeGradeLabel>
                    </ChallengeGrade>
                </CardInfo>
                <ChallengeButtonBox>
                    <ChallengeButton
                        onClick={() => {
                            // navigate("/challenge/challengedetail", props.id);
                            if (user) {
                                navigate("/challenge/challengedetail", {
                                    state: {
                                        id: props.id,
                                    },
                                });
                            } else {
                                sendToast("로그인을 해주세요.", "error");
                            }
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
