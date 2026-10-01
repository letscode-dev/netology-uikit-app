import { UiButton, useTheme } from "../ui-kit";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <UiButton theme="outlined" onClick={toggleTheme}>
      Тема: {theme}
    </UiButton>
  );
};

export default ThemeToggle;
