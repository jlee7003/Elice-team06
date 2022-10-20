import React from "react";
import { useRecoilState } from "recoil";
import DarkMode from "@/recoil/darkMode";
import { CheckBox, Label } from "@/styles/pages/toggleButton-style";
const ThemeWrapper: React.FC = ({ children }: any) => {
    const chk = document.getElementById("chk");
    const [darkMode, setDarkMode] = useRecoilState(DarkMode);
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (darkMode == "Light") {
            localStorage.setItem("DarkMode", "Light");
            setDarkMode("Dark");
        } else {
            localStorage.setItem("DarkMode", "Dark");
            setDarkMode("Light");
        }
    }

    return (
        <>
            <div style={{ display: "flex" }}>
                <CheckBox
                    type="checkbox"
                    id="chk"
                    onChange={handleChange}
                    checked={darkMode == "Light" ? true : false}
                />
                <Label>
                    <div></div>
                </Label>
            </div>
            {children}
        </>
    );
};

export default ThemeWrapper;
