import { UiButton, useTheme } from "../ui-kit";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <UiButton onClick={toggleTheme}>Тема: {theme}</UiButton>
    </div>
  );
};

export default ThemeToggle;
