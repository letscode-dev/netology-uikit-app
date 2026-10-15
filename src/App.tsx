import UiButton from "./ui-kit/UiButton";
import UiModal from "./ui-kit/UiModal";
import { useState } from "react";

const App = () => {
  const handleClick = () => {
    console.log("Клик из App");
  };

  const [open, setOpen] = useState(false);

  return (
    <div>
      <UiButton onClick={() => console.log("Hello")} theme="outlined">
        Контент для кнопки
      </UiButton>

      {/* <span>{value}</span>
      <button onClick={() => setValue(2)}>Click</button> */}

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
