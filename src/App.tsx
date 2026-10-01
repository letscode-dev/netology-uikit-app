import { Button } from "@mantine/core";
import { AirplaneIcon } from "@phosphor-icons/react";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="app">
      <ThemeToggle />

      <hr />

      <AirplaneIcon size={40} color="currentColor" weight="duotone" />

      <Button
        leftSection={
          <AirplaneIcon color="currentColor" weight="duotone" size={14} />
        }
        variant="default"
      >
        Кнопка с иконкой
      </Button>
    </div>
  );
};

export default App;
