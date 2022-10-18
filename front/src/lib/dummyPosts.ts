type sample = {
    title: string;
    summary?: string;
    writer?: string;
    like?: number;
    vote?: number;
    views?: number;
    comments?: number;
    timestamp?: string;
};

//typescript array interface handling
export interface Posts {
    [key: number]: sample[];
}

const post: Posts = {
    1: [
        {
            title: "안녕하세요",
            summary:
                "내용입니다 내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다 ",
            writer: "tester1",
            like: 10,
            vote: 10,
            views: 10,
            comments: 10,
            timestamp: "2022-10-01",
        },
        {
            title: "테스트 내용 입니다",
            summary:
                "내용입니다 내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다 채우면 이렇게 됩니다",
            writer: "tester2",
            like: 20,
            vote: 20,
            views: 20,
            timestamp: "2022-10-02",
        },
        {
            title: "test3",
            writer: "tester3",
            like: 30,
            vote: 30,
            views: 30,
            timestamp: "2022-10-03",
        },
        {
            title: "test4",
            writer: "tester4",
            like: 40,
            vote: 40,
            views: 40,
            timestamp: "2022-10-04",
        },
        {
            title: "test5",
            writer: "tester5",
            like: 50,
            vote: 50,
            views: 50,
            timestamp: "2022-10-05",
        },
    ],
    2: [
        { title: "test6" },
        { title: "test7" },
        { title: "test8" },
        { title: "test9" },
        { title: "test10" },
    ],
    3: [
        { title: "test6" },
        { title: "test7" },
        { title: "test8" },
        { title: "test9" },
        { title: "test10" },
    ],
    4: [
        { title: "test6" },
        { title: "test7" },
        { title: "test8" },
        { title: "test9" },
        { title: "test10" },
    ],
    5: [
        { title: "test6" },
        { title: "test7" },
        { title: "test8" },
        { title: "test9" },
        { title: "test10" },
    ],
    6: [
        { title: "test6" },
        { title: "test7" },
        { title: "test8" },
        { title: "test9" },
        { title: "test10" },
    ],
    7: [
        { title: "test6" },
        { title: "test7" },
        { title: "test8" },
        { title: "test9" },
        { title: "test10" },
    ],
    8: [
        { title: "test6" },
        { title: "test7" },
        { title: "test8" },
        { title: "test9" },
        { title: "test10" },
    ],
    9: [
        { title: "test6" },
        { title: "test7" },
        { title: "test8" },
        { title: "test9" },
        { title: "test10" },
    ],
    10: [
        { title: "test6" },
        { title: "test7" },
        { title: "test8" },
        { title: "test9" },
        { title: "test10" },
    ],
    11: [
        { title: "test6" },
        { title: "test7" },
        { title: "test8" },
        { title: "test9" },
        { title: "test10" },
    ],
    12: [
        { title: "test6" },
        { title: "test7" },
        { title: "test8" },
        { title: "test9" },
        { title: "test10" },
    ],
};

export default post;
