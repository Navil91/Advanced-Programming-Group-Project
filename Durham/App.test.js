import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { expect } from "@jest/globals";
import { test } from "@jest/globals";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
