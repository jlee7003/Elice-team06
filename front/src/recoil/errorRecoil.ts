import { atom } from "recoil";
import { ErrorModel } from "@/types/errorModel";

const error = atom<ErrorModel | null>({
    key: "error",
    default: null,
});

export default error;
