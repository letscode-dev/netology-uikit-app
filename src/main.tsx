import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@mantine/core/styles.css";
import "./index.css";

import App from "./App.tsx";
import { ThemeProvider } from "./ui-kit";
import MantineWithUiTheme from "./components/MantineWithUiTheme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <MantineWithUiTheme>
        <App />
      </MantineWithUiTheme>
    </ThemeProvider>
  </StrictMode>,
);
