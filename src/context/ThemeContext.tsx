import { ReactNode, useState, useEffect } from "react";
import ThemeContext from "./../models/theme-context";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isToggled, setToggled] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isToggled));
  }, [isToggled]);

  const toggleTheme = () => {
    setToggled(!isToggled);
  };

  return (
    <ThemeContext.Provider value={{ isToggled, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
