import { MantineProvider } from "@mantine/core";
import { useTheme } from "../ui-kit";

interface IProps {
  children: React.ReactNode;
}

const MantinWidthUiTheme = (props: IProps) => {
  const { children } = props;

  const { theme } = useTheme();

  return (
    <MantineProvider defaultColorScheme="light" forceColorScheme={theme}>
      {children}
    </MantineProvider>
  );
};

export default MantinWidthUiTheme;
