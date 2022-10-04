import { Card, CardUpper, CardLower } from "@styles/ChallengeCard-style";

type Level = "beginner" | "intermediate" | "advanced" | "default";

export interface Props {
    level?: Level;
}

const ChallengeCard = (props: Props) => {
    return (
        <Card>
            <CardUpper level={props.level ?? "default"} />
            <CardLower />
        </Card>
    );
};

export default ChallengeCard;
