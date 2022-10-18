export interface comments {
    id: number;
    author: string;
    post_id: number;
    dsscription: string;
    createdAt: string;
    updateAt: string;
}

//배열 형태가 아니라 이렇게 쓰는 것 같은데

// type comment = {
//     id: number;
//     author: string;
//     post_id: number;
//     dsscription: string;
//     createdAt: string;
//     updateAt: string;
// };

// export interface CommentLists {
//     [key: number]: comment[];
// }
