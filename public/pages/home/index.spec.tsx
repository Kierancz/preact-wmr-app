import { h } from "preact";
import { render } from "@testing-library/preact";

import Home from "./index";

test("shows the children when the checkbox is checked", () => {
  const { getByText } = render(<Home />);

  expect(getByText("This is the home page.")).toBeInTheDocument();
});
