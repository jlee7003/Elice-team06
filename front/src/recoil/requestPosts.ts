import { atom, selector, selectorFamily } from "recoil";
import Api from "@/api";
import { Post } from "../types/post";

const API = Api.getInstance();

//공부중...

const fetchPosts = (page: number) => {
    if (page === 2) {
        return Promise.resolve([
            { id: 4, title: "page4 post" },
            { id: 5, title: "page5 post" },
            { id: 6, title: "page6 post" },
        ]);
    }

    return Promise.resolve([
        { id: 1, title: "page1 post" },
        { id: 2, title: "page2 post" },
        { id: 3, title: "page3 post" },
    ]);
};

export const postsSelector = selectorFamily({
    key: "pages",
    get: (page: number) => {
        return async ({ get }) => {
            const posts = await fetchPosts(page);
            return posts;
        };
    },
});

const fetchPostsPractice = (page: number) => {
    for (let i = 1; i <= 5; i++) {
        page = i;
        if (page % 5 == 0) {
            return Promise.resolve([
                { id: page + 5, title: `page${page + 1} post` },
                { id: page + 6, title: `page${page + 2} post` },
                { id: page + 7, title: `page${page + 3} post` },
                { id: page + 8, title: `page${page + 4} post` },
                { id: page + 9, title: `page${page + 5} post` },
            ]);
        }

        return Promise.resolve([
            { id: page + 1, title: `page${page + 1} post` },
            { id: page + 2, title: `page${page + 2} post` },
            { id: page + 3, title: `page${page + 3} post` },
            { id: page + 4, title: `page${page + 4} post` },
            { id: page + 5, title: `page${page + 5} post` },
        ]);
    }

    // if (page === 2) {
    //     return Promise.resolve([
    //         { id: 4, title: "page4 post" },
    //         { id: 5, title: "page5 post" },
    //         { id: 6, title: "page6 post" },
    //     ]);
    // }

    // return Promise.resolve([
    //     { id: 1, title: "page1 post" },
    //     { id: 2, title: "page2 post" },
    //     { id: 3, title: "page3 post" },
    // ]);
};
