import { atom, selector } from "recoil";

export interface Comments {
    [key: number]: { author: string; description: string; id: string };
}

export const commentState = atom<Comments>({
    key: "commentState",
    default: [],
});
