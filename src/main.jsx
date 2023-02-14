import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StepperProvider } from "./context/StepperContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StepperProvider>
      <App />
    </StepperProvider>
  </React.StrictMode>
);
