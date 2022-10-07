import { atom, selector, selectorFamily } from "recoil";
import Api from "@/api";
import { AxiosResponse } from "axios";

export interface post {
    title: string;
    summary: string;
    like: number;
    writer: string;
    timestamp: string;
    comment: number;
    viewcounts: number;
}
const API = Api.getInstance();

//atom for pagination
//제네릭은 커스터마이징
const pagesAtom = atom<AxiosResponse<{ [key: number]: post[] }, Error>>({
    key: "pagesAtom",
    default: API.get(["a"]),
});

//변수이름<=>key는 리코일 내부에서 사용되는 고유이름
const pages = selectorFamily({
    key: "pages",
    get:
        (pageNum: number) =>
        async ({ get }) => {
            const pagesatom = get(pagesAtom).catch((err) => {
                throw new Error(err);
            });
            return pagesatom[pageNum]; //구독할거다
        },
    set:
        (startPageNum) =>
        async ({ set }) => {
            const pages = await API.get("경로+startPageNum");
            set(pagesAtom, pages);
        },
});
