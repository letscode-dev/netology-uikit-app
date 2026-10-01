import cn from "classnames";
import styles from "./styles.module.css";

interface IProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  theme?: "contained" | "outlined" | "text";
}

// const a = {
//   name: "Anton",
//   age: 23,
//   "theme-contained": "theme",
//   themeContained: "theme",
// };

// const a1 = a.name;
// const a2 = a["theme-contained"];

const UiButton = (props: IProps) => {
  const { onClick, children, disabled = false, theme } = props;

  // theme-contained
  // theme-outlined
  // theme-text

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(styles.wrapper, styles[`theme-${theme}`])}
    >
      {children}
    </button>
  );
};

export default UiButton;
