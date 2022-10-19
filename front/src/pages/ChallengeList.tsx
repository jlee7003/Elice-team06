import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "@/api/index";
import { Challenge, ChallengeCard, ChallengeCardList } from "@/types/challenge";
import { ROUTES } from "@/routes";
import { Main, CardBox, CardSection, CardUpper, CardLower } from "@/styles/pages/challenges-style";

const ChallengeList = () => {
    const [cardList, setCardList] = useState();

    const { target } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        switch (target) {
            case "my":
                API.get(["challenge", "my"]).then((res) => {
                    console.log(res);
                });
                break;
            case "all":
                break;
            default:
                navigate(ROUTES.ErrorPage.path);
        }
    }, []);

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

export default ChallengeList;
