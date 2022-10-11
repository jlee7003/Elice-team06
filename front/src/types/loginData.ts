import { SerializableParam } from "recoil";

interface LoginData {
    email: string;
    password: string;
    [key: string]: any;
}

export default LoginData;
