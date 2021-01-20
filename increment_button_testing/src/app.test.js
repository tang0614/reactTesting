import * as React from "react";
import App from "./App";
import { render } from "@testing-library/react";

it("render play", () => {
  const { getByText } = render(<App />);
  getByText("Play!");
});
