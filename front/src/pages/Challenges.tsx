import { Main, CardBox, CardSection, CardUpper, CardLower } from "@/styles/pages/challenges-style";
import { ChallengeCard, ChallengeCardData } from "@/types/challengeCard";

const data: ChallengeCardData = {
    1: [
        {
            title: "test",
            startDate: "2000-01-01",
            dueData: "2000-12-31",
            challengerCount: "1000",
            level: "beginer",
        },
        {
            title: "test",
            startDate: "2000-01-01",
            dueData: "2000-12-31",
            challengerCount: "1000",
            level: "beginer",
        },
        {
            title: "test",
            startDate: "2000-01-01",
            dueData: "2000-12-31",
            challengerCount: "1000",
            level: "beginer",
        },
        {
            title: "test",
            startDate: "2000-01-01",
            dueData: "2000-12-31",
            challengerCount: "1000",
            level: "beginer",
        },
    ],
    2: [
        {
            title: "test",
            startDate: "2000-01-01",
            dueData: "2000-12-31",
            challengerCount: "1000",
            level: "beginer",
        },
        {
            title: "test",
            startDate: "2000-01-01",
            dueData: "2000-12-31",
            challengerCount: "1000",
            level: "beginer",
        },
        {
            title: "test",
            startDate: "2000-01-01",
            dueData: "2000-12-31",
            challengerCount: "1000",
            level: "beginer",
        },
        {
            title: "test",
            startDate: "2000-01-01",
            dueData: "2000-12-31",
            challengerCount: "1000",
            level: "beginer",
        },
    ],
    3: [
        {
            title: "test",
            startDate: "2000-01-01",
            dueData: "2000-12-31",
            challengerCount: "1000",
            level: "beginer",
        },
        {
            title: "test",
            startDate: "2000-01-01",
            dueData: "2000-12-31",
            challengerCount: "1000",
            level: "beginer",
        },
        {
            title: "test",
            startDate: "2000-01-01",
            dueData: "2000-12-31",
            challengerCount: "1000",
            level: "beginer",
        },
        {
            title: "test",
            startDate: "2000-01-01",
            dueData: "2000-12-31",
            challengerCount: "1000",
            level: "beginer",
        },
    ],
    4: [
        {
            title: "test",
            startDate: "2000-01-01",
            dueData: "2000-12-31",
            challengerCount: "1000",
            level: "beginer",
        },
        {
            title: "test",
            startDate: "2000-01-01",
            dueData: "2000-12-31",
            challengerCount: "1000",
            level: "beginer",
        },
        {
            title: "test",
            startDate: "2000-01-01",
            dueData: "2000-12-31",
            challengerCount: "1000",
            level: "beginer",
        },
        {
            title: "test",
            startDate: "2000-01-01",
            dueData: "2000-12-31",
            challengerCount: "1000",
            level: "beginer",
        },
    ],
};

const Challenges = () => {
    const cardData = data;

    return (
        <Main>
            <CardSection>
                <CardBox>
                    <CardUpper />
                    <CardLower />
                </CardBox>
                <CardBox>
                    <CardUpper />
                    <CardLower />
                </CardBox>
                <CardBox>
                    <CardUpper />
                    <CardLower />
                </CardBox>
                <CardBox>
                    <CardUpper />
                    <CardLower />
                </CardBox>
                <CardBox>
                    <CardUpper />
                    <CardLower />
                </CardBox>
                <CardBox>
                    <CardUpper />
                    <CardLower />
                </CardBox>
                <CardBox>
                    <CardUpper />
                    <CardLower />
                </CardBox>
                <CardBox>
                    <CardUpper />
                    <CardLower />
                </CardBox>
            </CardSection>
        </Main>
    );
};

export default Challenges;
