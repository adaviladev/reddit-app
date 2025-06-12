import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Reddit App header", () => {
  render(<App />);
  expect(screen.getByText(/Reddit App/i)).toBeInTheDocument();
});
