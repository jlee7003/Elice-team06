export interface User {
    nickname: string | null;
    // introduce: string | null;
}

export interface Admin extends User {
    admin: boolean;
}

export default Admin;
