export interface ChallengeCard {
    title: string;
    startDate: string;
    dueData: string;
    challengerCount: string;
    level: string;
}

export interface ChallengeCardData {
    [key: number]: ChallengeCard[];
}
