import React, { createContext } from "react";
import { Theme, ThemeContextType } from "@/styles/theme";
export const ThemeContext = React.createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<React.ReactNode> = ({ children }: any) => {
    const [themeMode, setThemeMode] = React.useState<Theme>("light");
    return (
        <ThemeContext.Provider value={{ theme: themeMode, changeTheme: setThemeMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
