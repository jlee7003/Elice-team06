import { atom, selector } from "recoil";

const userData = atom({
    key: "userId",
    default: { name: "홍길동", desc: "안녕하세요" },
});

export default userData;
