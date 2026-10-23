import type { Meta, StoryObj } from "@storybook/react-vite";
import { useArgs } from "storybook/preview-api";
import { fn } from "storybook/test";
import UiInput from "./UiInput";

const meta = {
  title: "Ui-Kit/UiInput",
  component: UiInput,
  args: {
    value: "",
    setValue: fn(),
    "aria-label": "Текст",
  },
  // UiInput контролируемый: без обновления args поле не меняется при вводе
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    const setValue = (value: string) => {
      args.setValue(value);
      updateArgs({ value });
    };

    return <UiInput {...args} setValue={setValue} />;
  },
} satisfies Meta<typeof UiInput>;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const Filled: Story = {
  args: {
    value: "Текст в поле",
  },
};

export default meta;
