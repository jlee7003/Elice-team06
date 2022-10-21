import { useEffect, useState, useMemo, MouseEvent } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import API from "@/api/index";
import { ChallengeCardList } from "@/types/challenge";
import { ROUTES } from "@/routes";
import ChallengeCard, { Level } from "@/components/ChallengeCard";
import EasyPagination from "@/components/Easy-pagination";

import { Category, CategoryTitle, CategoryContent } from "@/styles/pages/home-style";
import { Main } from "@/components/common/Main";

import dateFormat from "@/lib/dateFormat";

interface Pagination {
    start: number;
    end: number;
    count: number;
    pages?: string[];
}

const pagination: Pagination = {
    start: 1,
    end: 5,
    count: 8,
};

const title = {
    my: "내가 저질러버린 챌린지",
    all: "모든 챌린지",
};

const ChallengeList = () => {
    const [cardList, setCardList] = useState<ChallengeCardList | {}>({});
    const [current, setCurrent] = useState(1);

    const { target } = useParams();
    const locationState = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        switch (target) {
            case "my":
                if (locationState.state !== "authuser") {
                    navigate(ROUTES.ErrorPage.path);
                }

                API.get([
                    "challenge",
                    `my?start=${pagination.start}&end=${pagination.end}&count=${pagination.count}`,
                ]).then((res: any) => {
                    if (res === null) {
                        navigate(ROUTES.ErrorPage.path);
                        return;
                    }

                    const pages = Object.keys(res.data);
                    pagination.start = Number(pages[0]);
                    pagination.end = Number(pages[pages.length - 1]);
                    pagination["pages"] = pages;
                    setCurrent(Number(pages[0]));

                    setCardList(res.data);
                });
                break;
            case "all":
                API.get<ChallengeCardList>([
                    "challenge",
                    `all?start=${pagination.start}&end=${pagination.end}&count=${pagination.count}`,
                ]).then((res: any) => {
                    if (res === null) {
                        navigate(ROUTES.ErrorPage.path);
                        return;
                    }

                    const pages = Object.keys(res.data);
                    pagination.start = Number(pages[0]);
                    pagination.end = Number(pages[pages.length - 1]);
                    pagination["pages"] = pages;
                    setCurrent(Number(pages[0]));

                    setCardList(res.data);
                });
                break;
            default:
                navigate(ROUTES.ErrorPage.path);
        }
    }, []);

    const prevButton = () => {
        if (pagination.start < current) {
            setCurrent((prev) => {
                return Number(prev) - 1;
            });
        }
    };

    const nextButton = () => {
        if (pagination.end > current) {
            setCurrent((prev) => {
                return Number(prev) + 1;
            });
        }
    };

    const currentButton = (e: MouseEvent<HTMLButtonElement>) => {
        const { name } = e.target as any;

        if (current !== name) {
            setCurrent(name);
        }
    };

    const currentPageCards = useMemo(() => {
        if (Object.keys(cardList).length === 0) {
            return null;
        }

        const cards = cardList[current].map((card, idx) => {
            return (
                <ChallengeCard
                    key={idx}
                    id={Number(card.id)}
                    level={card.level as Level}
                    // grade={true}
                    title={card.title!}
                    date={dateFormat(card.start_date!, card.due_date!)}
                    count={card._count.Challenger}
                />
            );
        });

        return cards;
    }, [cardList, current]);

    return (
        <Main>
            {Object.keys(cardList).length !== 0 && (
                <>
                    <Category>
                        <CategoryTitle>{title[target]}</CategoryTitle>
                        <CategoryContent>{currentPageCards}</CategoryContent>
                    </Category>
                    <EasyPagination
                        prevButton={prevButton}
                        nextButton={nextButton}
                        currentButton={currentButton}
                        pages={pagination.pages ?? []}
                    />
                </>
            )}
        </Main>
    );
};

export default ChallengeList;
