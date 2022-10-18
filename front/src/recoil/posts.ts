import { atom } from "recoil";
import { Post } from "@/types/post";

const postState = atom<Post | null>({
    key: "postState",
    default: null,
});

export default postState;
