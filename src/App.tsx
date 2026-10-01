import UiButton from "./ui-kit/UiButton/UiButton";

const App = () => {
  const handleClick = () => {
    console.log("Клик из App");
  };

  const handleClick2 = () => {
    console.log("Клик из App2");
  };

  return (
    <div>
      <h1>Hello</h1>
      <UiButton onClick={handleClick}>Кнопка из App</UiButton>
      <UiButton onClick={handleClick2}>Кнопка из App2</UiButton>
    </div>
  );
};

export default App;
