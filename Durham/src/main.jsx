import { StrictMode } from "react";
import { Provider } from "./components/ui/provider.jsx";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider theme="light">
      <App />
    </Provider>
  </StrictMode>
);
