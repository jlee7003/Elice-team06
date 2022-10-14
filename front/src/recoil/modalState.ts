import { atom, selector } from "recoil";
type modals_State = "login" | "challenge";

const modalState = atom({
    key: "modalState",
    default: "",
});

export default modalState;
