import { fn } from "storybook/test";
import UiButton from "./UiButton";

const meta = {
  title: "Ui-Kit/UiButton",
  component: UiButton,
  // argTypes: {
  //   disabled: {
  //     control: { type: "boolean" },
  //   },
  // },
  args: {
    children: "Кнопка",
    disabled: false,
    onClick: fn(),
  },
};

export const Basic = {
  args: {
    theme: "contained",
  },
};

export const Outlined = {
  args: {
    theme: "outlined",
  },
};

export const Text = {
  args: {
    theme: "text",
  },
};

export default meta;
