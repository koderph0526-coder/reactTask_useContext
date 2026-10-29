import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globalStyle.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeToggleContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
