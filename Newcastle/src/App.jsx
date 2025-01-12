import NavBar from "remoteApp/NavBar";
import { useState } from "react";
import HomeDashboard from "./components/layout/HomeDashboard";
import SettingsForm from "./components/widgets/SettingsForm";

export default function App() {
  const [activeNav, setActiveNav] = useState("home");
  return (
    <>
      <NavBar
        currentUser={"admin"}
        activeNav={activeNav}
        onHandleActiveNav={setActiveNav}
      />
      {activeNav == "home" ? <HomeDashboard /> : <SettingsForm />}
    </>
  );
}
