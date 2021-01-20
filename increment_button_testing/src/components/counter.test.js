import * as React from "react";
import Counter from "./Counter";
import { render, fireEvent } from "@testing-library/react";

test("counters increments and decrements when the buttons are clicked", () => {
  //  render a react component to Testing DOM
  const { getByText } = render(<Counter />);

  const DecrementButton = getByText("Decrement");
  const IncrementButton = getByText("Increment");

  getByText("Current count: 0");
  fireEvent.click(IncrementButton);
  getByText("Current count: 1");
  fireEvent.click(DecrementButton);
  getByText("Current count: 0");
});
