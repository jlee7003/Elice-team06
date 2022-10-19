export interface ChallengeBoardModel {
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    proposer: string;
    due_date: string;
    start_date: string;
    goal: string;
    level: string;
    description: string;
    Challenger: [nickname: string] | any;
}

export default ChallengeBoardModel;
