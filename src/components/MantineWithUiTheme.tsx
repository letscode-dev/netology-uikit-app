import { MantineProvider } from "@mantine/core";

import { useTheme } from "../ui-kit";

const MantineWithUiTheme = (props: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <MantineProvider defaultColorScheme="light" forceColorScheme={theme}>
      {props.children}
    </MantineProvider>
  );
};

export default MantineWithUiTheme;
