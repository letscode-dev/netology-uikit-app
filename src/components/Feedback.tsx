import { Text, Paper, Title, Select, Button } from "@mantine/core";
import { useState } from "react";

// const books = ["Фантастика", "Приключения", "Экшен"];
const books = [
  {
    label: "Приключения",
    value: 1,
  },
  {
    label: "Экшен",
    value: 2,
  },
  {
    label: "Фэнтези",
    value: 3,
  },
];

const Feedback = () => {
  const [select, setSelect] = useState<number | null>(null);

  const handleChange = (value: number | null) => {
    setSelect(value);
  };

  const submit = () => {
    console.log("select", select);
  };

  return (
    <Paper shadow="lg" radius="lg" p="xl">
      <Title order={3}>Оставьте заявку</Title>

      <Select
        onChange={handleChange}
        label="Выберите жанр книги"
        placeholder="Книги"
        data={books}
      />

      <Text>*Мы обработаем вашу заявку</Text>

      <Button variant="filled" onClick={submit}>
        Отправить
      </Button>
    </Paper>
  );
};

export default Feedback;
