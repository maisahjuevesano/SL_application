import { ReactNode, useState } from "react";
import ThemeContext from "./../models/theme-context";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isToggled, setToggled] = useState(false);

  const toggleTheme = () => {
    setToggled(!isToggled);
  };

  return (
    <ThemeContext.Provider value={{ isToggled, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
