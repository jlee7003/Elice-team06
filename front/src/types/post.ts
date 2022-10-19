//내가 받을 데이터 (get으로 불러올 데이터 양식)
//db와 일치해야 함

//개별 post의 type
type post = {
    id: number;
    author: string;
    title: string;
    dsscription: string;
    view: string;
    createdAt: string;
    updateAt: string;
};

//post의 뭉치, 받아올 바로 그 post의 리스트의 interface
export interface PostLists {
    [key: number]: post[];
}

//내가 보낼 데이터(*post할 때 사용함)
//변수명 수정 해야 함, 주의
export interface Post {
    title: string;
    dsscription: string;
    view: string;
    createdAt: string;
    updateAt: string;
}

type PageData = {
    start: number;
    range: number;
    count: number;
    end: number;
};

export interface PageDataProps {
    start: number;
    range: number;
    count: number;
    end: number;
}
export interface PostProps {
    PostList: PostLists;
    PageData: PageData;
}
