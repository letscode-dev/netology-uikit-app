import { Badge, type MantineColor } from "@mantine/core";

import styles from "./styles.module.css";

interface IProps {
  color?: MantineColor;
  children: React.ReactNode;
}

const UiBadge = (props: IProps) => {
  const { color, children } = props;

  return (
    <Badge className={styles.wrapper} color={color}>
      {children}
    </Badge>
  );
};

export default UiBadge;
