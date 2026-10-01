import cn from "classnames";
import { getThemeClassName } from "../utils";

import styles from "./styles.module.css";

interface IProps {
  children: React.ReactNode;
  // onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onClick?: () => void;
  disabled?: boolean;
  theme?: "text" | "outlined" | "contained";
}

const UiButton = (props: IProps) => {
  const { children, onClick, disabled = false, theme } = props;

  const themeClassName = getThemeClassName(theme, styles);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(styles.wrapper, themeClassName)}
    >
      {children}
    </button>
  );
};

export default UiButton;
