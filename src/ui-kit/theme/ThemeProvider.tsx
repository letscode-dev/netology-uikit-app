import { createContext, useContext, useState } from "react";

import "./tokens.css";

interface IProps {
  children: React.ReactNode;
}

type UiTheme = "light" | "dark";

interface IThemeContext {
  theme: UiTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider = (props: IProps) => {
  const { children } = props;

  const [theme, setTheme] = useState<UiTheme>("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div data-ui-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme нужно использовать внутри ThemeProvider");
  }

  return context;
};
