import { atom, selector } from "recoil";

interface Comments {
    writer: string;
    comment: string;
    // id: string;
    [key: string]: string;
}
interface CommentsArray extends Array<Comments> {}

export const commentState = atom<CommentsArray>({
    key: "commentState",
    default: [],
});

export default commentState;
