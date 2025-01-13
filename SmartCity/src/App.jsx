import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
// eslint-disable-next-line no-unused-vars
import HomeDashboard from "./components/layout/HomeDashboard";
import { Toaster } from "./components/ui/toaster";
import LoginPage from "./components/layout/LoginPage";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState("admin");
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <HomeDashboard
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/"
          element={<LoginPage onHandleCurrentUser={setCurrentUser} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
