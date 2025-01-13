/**
 * @file HomeDashboard.test.js
 * @description Integration tests for the HomeDashboard component to ensure it correctly renders charts and handles data fetching.
 */

import { render, screen, waitFor } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import HomeDashboard from "./src/components/layout/HomeDashboard";
import { vi } from "vitest";
import "@testing-library/jest-dom";

// Default expected API response
const mockConsumptionData = [
  { provider: "A", date: "2024-01-01", consumption: 12 },
  { provider: "B", date: "2024-01-01", consumption: 14 },
];

// Mock the fetch function to simulate API response
globalThis.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockConsumptionData),
  })
);

describe("HomeDashboard Component", () => {
  test("renders without crashing", () => {
    render(<HomeDashboard />);
    console.log(screen.debug()); // Debug information
    expect(screen.getByTestId("home-dashboard")).toBeInTheDocument();
  });

  test("renders charts with correct data", async () => {
    render(<HomeDashboard />);
    await waitFor(() => {
      console.log(screen.debug()); // Debug information
      expect(screen.getByText("Provider A")).toBeInTheDocument();
      expect(screen.getByText("Provider B")).toBeInTheDocument();
    });
  });

  test("handles fetch error correctly", async () => {
    globalThis.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("Failed to fetch"))
    );

    render(<HomeDashboard />);
    await waitFor(() => {
      console.log(screen.debug()); // Debug information
      expect(screen.getByText("Error loading data")).toBeInTheDocument();
    });
  });

  test("should render the title and description", () => {
    // Render the HomeDashboard component
    render(<HomeDashboard />);
    console.log(screen.debug()); // Debug information

    // Check if the title 'Sunderland' is present
    expect(screen.getByText(/Sunderland/i)).toBeInTheDocument();

    // Check if the description 'View average electricity usage summary of Sunderland City' is present
    expect(
      screen.getByText(
        /View average electricity usage summary of Sunderland City/i
      )
    ).toBeInTheDocument();
  });

  test("should display loading spinner while data is fetching", async () => {
    // Simulate a delay in the fetch request
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () =>
        new Promise((resolve) =>
          setTimeout(() => resolve(mockConsumptionData), 1000)
        ),
    });

    // Render the HomeDashboard component
    render(<HomeDashboard />);
    console.log(screen.debug()); // Debug information

    // Check if the loading spinner is present
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();

    // Wait for the data to load and then check if the spinner is removed
    await waitFor(() => screen.getByText("Provider A"));
    expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument();
  });
});
