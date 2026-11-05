// import StatusModal from "./components/StatusModal";
import ThemeToggle from "./components/ThemeToggle";
import ButtonIcon from "./components/ButtonIcon";
import Feedback from "./components/Feedback";
import { UiBadge } from "./ui-kit";

const App = () => {
  return (
    <div className="app">
      {/* <StatusModal /> */}
      <ThemeToggle />
      <ButtonIcon />
      <UiBadge color="pink">Контент</UiBadge>

      <Feedback />
    </div>
  );
};

export default App;
