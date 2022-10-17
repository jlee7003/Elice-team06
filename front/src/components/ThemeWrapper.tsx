import React from "react";
import { Theme, ThemeContextType } from "@/styles/theme";
import { useRecoilState } from "recoil";
import DarkMode from "@/recoil/darkMode";
import { CheckBox, Label, Sun, Moon } from "@/styles/pages/toggleButton-style";
const ThemeWrapper: React.FC = ({ children }: any) => {
    // const { theme, changeTheme } = React.useContext(ThemeContext) as ThemeContextType;
    const chk = document.getElementById("chk");
    const [darkMode, setDarkMode] = useRecoilState(DarkMode);
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (darkMode == "Light") {
            // sessionStorage.setItem("mode", "Dark");
            setDarkMode("Dark");
        } else {
            // sessionStorage.setItem("mode", "Light");
            setDarkMode("Light");
        }
    }
    return (
        <>
            <div style={{ display: "flex" }}>
                <CheckBox type="checkbox" id="chk" onChange={handleChange} />
                <Label>
                    <Sun>☀️</Sun>
                    <Moon>🌙</Moon>
                    <div></div>
                </Label>
            </div>
            {children}
        </>
    );
};

export default ThemeWrapper;
