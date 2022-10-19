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
                getChallengeData(target).then((data) => {
                    if (data === null) {
                        navigate(ROUTES.Home.path);
                        return;
                    }
                    console.log(data);
                    cardListRef.current = data;
                });
                break;
            case "all":
                getChallengeData(target).then((data) => {
                    if (data === null) {
                        navigate(ROUTES.Home.path);
                        return;
                    }

                    cardListRef.current = data;
                });
                break;
            default:
                navigate(ROUTES.ErrorPage.path);
        }
    }, [cardListRef]);
    console.log(cardListRef.current);
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
