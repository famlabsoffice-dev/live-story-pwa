import { render, screen } from "@testing-library/react";
import Home from "./page";


describe("Live Story presentation layer", () => {
  it("renders the application identity", () => {
    render(<Home />);

    expect(screen.getByText("Live Story")).toBeInTheDocument();
    expect(screen.getByText("Every Life Matters.")).toBeInTheDocument();
  });
});
