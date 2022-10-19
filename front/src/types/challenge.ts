export interface ChallengeCard {
    id: string | null;
    title: string | null;
    due_date: string | number | Date | any;
    start_date: string | number | Date | any;
    level: string | null;
    _count: [Challenger: number] | any;
}

export interface ChallengeCardList {
    [key: number]: ChallengeCard[];
}
