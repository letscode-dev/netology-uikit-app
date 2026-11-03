import { UiButton, useTheme } from "../ui-kit";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return <UiButton onClick={toggleTheme}>Тема: {theme}</UiButton>;
};

export default ThemeToggle;
