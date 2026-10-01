import styles from "./styles.module.css";

interface IProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const UiModal = (props: IProps) => {
  const { children, open, onClose } = props;

  if (!open) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <button className={styles.close} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

interface ISlotProps {
  children: React.ReactNode;
}
const UiModalHeader = (props: ISlotProps) => (
  <header className={styles.header}>{props.children}</header>
);
const UiModalBody = (props: ISlotProps) => (
  <main className={styles.body}>{props.children}</main>
);
const UiModalFooter = (props: ISlotProps) => (
  <footer className={styles.footer}>{props.children}</footer>
);

UiModal.Header = UiModalHeader;
UiModal.Body = UiModalBody;
UiModal.Footer = UiModalFooter;

export default UiModal;
