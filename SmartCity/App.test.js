/**
 * @file App.test.js
 * @description Integration tests for the App component to ensure routing and component rendering work correctly.
 */

import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import App from "./src/App";
import "@testing-library/jest-dom";

describe("App Component", () => {
  test("renders LoginPage by default", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    screen.debug(); // Add this line to output the rendered HTML
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  test("renders HomeDashboard when navigating to /dashboard", () => {
    window.history.pushState({}, "Dashboard Page", "/dashboard");
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    screen.debug(); // Add this line to output the rendered HTML
    expect(screen.getByTestId("home-dashboard")).toBeInTheDocument();
  });

  test("renders ProfilePage when navigating to /profile", () => {
    window.history.pushState({}, "Profile Page", "/profile");
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    screen.debug(); // Add this line to output the rendered HTML
    expect(screen.getByTestId("profile-page")).toBeInTheDocument();
  });

  test("renders NotFoundPage for an unknown route", () => {
    window.history.pushState({}, "Unknown Page", "/unknown");
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    screen.debug(); // Add this line to output the rendered HTML
    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });
});
