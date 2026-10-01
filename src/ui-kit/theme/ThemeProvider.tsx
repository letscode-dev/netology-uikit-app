import { createContext, useContext, useEffect, useState } from "react";

// Токены приезжают вместе с провайдером — как в реальных ui-библиотеках
import "./tokens.css";

export type UiTheme = "light" | "dark";

interface IThemeContext {
  theme: UiTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const [theme, setTheme] = useState<UiTheme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Атрибут на <html>, как data-mui-color-scheme в MUI: тему получают и порталы,
  // которые рендерятся в конец <body>, вне дерева провайдера
  useEffect(() => {
    const root = document.documentElement;

    root.setAttribute("data-ui-theme", theme);

    return () => root.removeAttribute("data-ui-theme");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Обёртка с data-ui-theme — от неё наследуются переменные всем вложенным компонентам */}
      {/* <div data-ui-theme={theme}>{children}</div> */}
      {children}
    </ThemeContext.Provider>
  );
};

// Хук-обёртка, чтобы не писать useContext(ThemeContext) в каждом компоненте
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);

  // Проверка убирает null из типа — после неё доступны theme и toggleTheme
  if (!context) {
    throw new Error("useTheme нужно использовать внутри <ThemeProvider>");
  }

  return context;
};
