import { atom, selector, selectorFamily } from "recoil";
import Api from "@/api";
import { Post } from '../types/post'

const API = Api.getInstance();

const fetchPosts = (page: number) => {
    if (page === 2) {
        return Promise.resolve([
            {id:4, title: 'page4 post'},
            {id:5, title: 'page5 post'},
            {id:6, title: 'page6 post'},
        ])
    }

    return Promise.resolve([
        {id:1, title: 'page1 post'},
        {id:2, title: 'page2 post'},
        {id:3, title: 'page3 post'},
    ])
}

//atom for pagination
// //제네릭은 커스터마이징
// export const pagesAtom = atom<number>({
//     key: "pagesAtom",
//     // default: API.get(["a"]),
//     default: 0,
// });

//변수이름<=>key는 리코일 내부에서 사용되는 고유이름
export const postsSelector = selectorFamily({
    key: "pages",
    get: (page: number) => {
        return async ({ get }) => {
            const posts = await fetchPosts(page)
            return posts
        }
    },
    // set:
    //     () =>
    //         async ({ set }) => {
    //             console.log('setset')
    //             // const pages = await API.get("경로+startPageNum");
    //             // set(pagesAtom, pages);
    //         },
});
