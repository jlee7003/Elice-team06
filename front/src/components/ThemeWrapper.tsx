import React from "react";
import { Theme, ThemeContextType } from "@/styles/theme";
import { ThemeContext } from "@/UI/themeProvider";
import { useRecoilState } from "recoil";
import DarkMode from "@/recoil/darkMode";
const ThemeWrapper: React.FC = ({ children }: any) => {
    // const { theme, changeTheme } = React.useContext(ThemeContext) as ThemeContextType;

    const [darkMode, setDarkMode] = useRecoilState(DarkMode);
    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (darkMode == "Light") {
            setDarkMode("Dark");
        } else {
            setDarkMode("Light");
        }
    }
    return (
        <>
            <button onClick={handleClick}>DarkMODE</button>
            {children}
        </>
    );
};

export default ThemeWrapper;
