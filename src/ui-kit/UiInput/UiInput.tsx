// import cn from "classnames";
// import { getThemeClassName } from "../utils";

import styles from "./styles.module.css";

interface IProps {
  value: string;
  setValue: (value: string) => void;
}

const UiInput = (props: IProps) => {
  const { value, setValue } = props;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setValue(value);
  };

  return (
    <input
      onChange={onChange}
      value={value}
      type="text"
      className={styles.wrapper}
    />
  );
};

export default UiInput;
