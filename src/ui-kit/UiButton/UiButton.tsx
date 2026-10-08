import cn from "classnames";
import styles from "./styles.module.css";

interface IProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  theme?: "contained" | "outlined" | "text";
}

const UiButton = (props: IProps) => {
  const { onClick, children, disabled = false, theme = "contained" } = props;

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
