import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  isToggled: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
