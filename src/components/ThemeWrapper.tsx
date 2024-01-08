import { ReactNode } from "react";
import { useTheme } from "../models/theme-context";

import { GlobalStyle } from "./../styled/Layout";

interface ThemeWrapperProps {
  children: ReactNode;
}

export const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const { isToggled } = useTheme();

  return (
    <>
      <GlobalStyle isToggled={isToggled} />
      {children}
    </>
  );
};
