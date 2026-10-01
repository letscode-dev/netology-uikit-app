// Точка входа библиотеки — то, что будет публичным API npm-пакета
export { default as UiButton } from "./UiButton";
export { default as UiInput } from "./UiInput";
export { default as UiModal } from "./UiModal";

export { ThemeProvider, useTheme } from "./theme/ThemeProvider";
export type { UiTheme } from "./theme/ThemeProvider";
