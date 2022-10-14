import { atom, selector } from "recoil";

// type Mode = "Light" | "Dark";

const darkMode = atom({
    key: "Mode",
    default: "Light",
});

export default darkMode;
