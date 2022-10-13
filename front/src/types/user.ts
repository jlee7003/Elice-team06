export interface User {
    nickname: string;
    introduce: string;
}

export interface Admin extends User {
    admin: boolean;
}

export default Admin;
