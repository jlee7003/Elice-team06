export interface ChallengeCard {
    id: string | null;
    title: string | null;
    due_date: string | number | Date;
    start_date: string | number | Date;
    level: string | null;
    _count: [Challenger: number] | any;
}

export interface ChallengeCardList {
    [key: number]: ChallengeCard;
}
