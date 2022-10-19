export interface ChallengeCard {
    title: string;
    startDate: string;
    dueData: string;
    challengerCount: string;
    level: string;
}

export interface ChallengeCardList {
    data: ChallengeCardList | undefined;
    [key: number]: ChallengeCard[];
}

export interface Challenge {
    title: String;
    description: String;
    goal: String;
    level: String;
}
