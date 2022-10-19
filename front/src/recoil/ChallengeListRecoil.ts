import { atom, selector } from "recoil";
export interface ChallengeListModel {
    [key: number]: {
        id: string | null;
        title: string | null;
        due_date: string | number | Date | any;
        start_date: string | number | Date | any;
        level: string | null;
        _count: [Challenger: number] | any;
    };
}
export const ChallengeList = atom<ChallengeListModel>({
    key: "ChallengeList",
    default: [],
});
