import UiButton from "./ui-kit/UiButton";
import UiModal from "./ui-kit/UiModal";
import { useState } from "react";

const App = () => {
  const handleClick = () => {
    console.log("Клик из App");
  };

  const [open, setOpen] = useState(false);

  // const [value, setValue] = useState(0);
  // const value = counter[0];
  // const setValue = counter[1];

  // const fruits = ["Orange", "Apple", "Peach"];
  // const orange = fruits[0];
  // const apple = fruits[1];
  // const peach = fruits[2];
  // const [orange, apple, peach] = fruits;

  return (
    <div>
      {/* <span>{value}</span>
      <button onClick={() => setValue(2)}>Click</button> */}

      <h4>Кнопки</h4>
      <UiButton onClick={handleClick}>Default</UiButton>

      <UiButton theme="contained" onClick={handleClick}>
        Contained
      </UiButton>

      <UiButton theme="outlined" onClick={handleClick}>
        Outlined
      </UiButton>
      <UiButton theme="text" onClick={handleClick}>
        Text
      </UiButton>

      <h4>Модальное окно</h4>
      <UiButton onClick={() => setOpen(true)}>Открыть модалку</UiButton>

      <UiModal open={open} onClose={() => setOpen(false)}>
        <UiModal.Header>Заголовок</UiModal.Header>
        <UiModal.Body>
          Текст для контента. Текст для контента. Текст для контента. Текст для
          контента. Текст для контента.{" "}
        </UiModal.Body>
        <UiModal.Footer>Подвал</UiModal.Footer>
      </UiModal>
    </div>
  );
};

export default App;
