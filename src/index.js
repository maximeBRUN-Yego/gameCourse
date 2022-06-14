import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AppProvider } from "./AppProvider";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
