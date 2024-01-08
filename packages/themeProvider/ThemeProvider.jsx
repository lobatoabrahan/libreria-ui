// ThemeProvider.jsx
import React, { createContext, useContext } from "react";
import { defaultTheme } from "../theme/Theme";
export const ThemeContext = createContext(defaultTheme);

export function ThemeProvider({ theme = defaultTheme, children }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
