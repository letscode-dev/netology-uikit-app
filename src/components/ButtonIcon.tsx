import { ImageIcon, AvocadoIcon } from "@phosphor-icons/react";
import { Button } from "@mantine/core";

const ButtonIcon = () => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <h4>Кнопки и иконки</h4>

      <ImageIcon size={32} color="currentColor" />
      <AvocadoIcon size={32} weight="light" color="currentColor" />

      <Button
        leftSection={<ImageIcon size={14} />}
        onClick={handleClick}
        variant="light"
      >
        Button
      </Button>
    </div>
  );
};

export default ButtonIcon;
