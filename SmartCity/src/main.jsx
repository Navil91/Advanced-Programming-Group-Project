import { Provider } from "./components/ui/provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import HomeDashboard from "./components/layout/HomeDashboard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <HomeDashboard />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
