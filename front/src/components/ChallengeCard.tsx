import { Card, CardUpper, CardLower } from "@styles/ChallengeCard-style";
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
            <CardLower />
        </Card>
    );
};

export default ChallengeCard;
