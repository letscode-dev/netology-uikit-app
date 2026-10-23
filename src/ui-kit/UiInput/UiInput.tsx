import styles from "./styles.module.css";

interface IProps {
  value: string;
  setValue: (value: string) => void;
  // Доступное имя поля: id — чтобы связать с <label htmlFor>, aria-label — если подписи на экране нет
  id?: string;
  "aria-label"?: string;
}

const UiInput = (props: IProps) => {
  const { value, setValue, id, "aria-label": ariaLabel } = props;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setValue(value);
  };

  return (
    <input
      id={id}
      aria-label={ariaLabel}
      onChange={onChange}
      value={value}
      type="text"
      className={styles.wrapper}
    />
  );
};

export default UiInput;
