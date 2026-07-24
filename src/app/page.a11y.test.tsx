import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Home from "./page";

expect.extend(toHaveNoViolations);

describe("Live Story accessibility", () => {
  it("has no basic accessibility violations", async () => {
    const { container } = render(<Home />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
