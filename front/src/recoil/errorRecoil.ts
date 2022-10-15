import { atom, selector, selectorFamily, noWait, atomFamily } from "recoil";
import { ErrorModel } from "@/types/errorModel";
import { LoginForm, LoginResult } from "@/types/login";
import { AxiosResponse } from "axios";
import Api from "@/api/.";

const error = atom<ErrorModel | null>({
    key: "error",
    default: null,
});

export default error;
