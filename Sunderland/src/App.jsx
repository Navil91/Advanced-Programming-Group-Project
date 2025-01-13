/**
 * App Component
 * Author: Abhinav Prasannakumar
 *
 * Main entry point for the application. Manages navigation state
 * and conditionally renders components based on the selected navigation item.
 *
 * Imports:
 * - `NavBar`: Navigation bar widget.
 * - `HomeDashboard`: Main dashboard layout.
 * - `SettingsForm`: Form for managing settings.
 *
 * Functionality:
 * - Tracks `activeNav` state to determine the current view ("home" or "settings").
 * - Passes `currentUser` ("admin") and `activeNav` to `NavBar`.
 * - Updates `activeNav` via the `onHandleActiveNav` callback.
 * - Renders `HomeDashboard` or `SettingsForm` based on `activeNav`.
 */
import NavBar from "./components/widgets/NavBar";
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
