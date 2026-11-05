import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./ui-kit";
import App from "./App.tsx";
import MantinWidthUiTheme from "./components/MantinWidthUiTheme.tsx";

import "./index.css";
import "@mantine/core/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <MantinWidthUiTheme>
        <App />
      </MantinWidthUiTheme>
    </ThemeProvider>
  </StrictMode>,
);
