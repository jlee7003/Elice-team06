import { SignupForm, SignupResult } from "@/types/signup";
import { User } from "@/types/user";
import Api from "@/api/.";

const signup = async (formData: SignupForm) => {
    const API = Api.getInstance();

    const res = await API.post<SignupForm, SignupResult>(["api", "signup"], formData);

    if (res.status !== 200) {
        return null;
    }

    const result = res.data;

    return result;
};

export default signup;
