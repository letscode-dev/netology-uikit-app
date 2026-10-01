import UiButton from "./ui-kit/UiButton";

const App = () => {
  const handleClick = () => {
    console.log("Клик из App");
  };

  return (
    <div>
      <UiButton theme="contained" onClick={handleClick}>
        Contained
      </UiButton>
      <UiButton theme="outlined" onClick={handleClick}>
        Outlined
      </UiButton>
      <UiButton theme="text" onClick={handleClick}>
        Text
      </UiButton>
    </div>
  );
};

export default App;
