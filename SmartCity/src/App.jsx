import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
// eslint-disable-next-line no-unused-vars
import HomeDashboard from "./components/layout/HomeDashboard";
import { Toaster } from "./components/ui/toaster";
import LoginPage from "./components/layout/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/dashboard" element={<HomeDashboard />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
