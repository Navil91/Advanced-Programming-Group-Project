import { Provider } from "./components/ui/provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import HomeDashboard from "./components/layout/HomeDashboard.jsx";
import LoginPage from "./components/layout/LoginPage.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
