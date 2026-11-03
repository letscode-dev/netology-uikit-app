import { useState } from "react";

import { UiButton, UiModal } from "../ui-kit";

const StatusModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
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

export default StatusModal;
