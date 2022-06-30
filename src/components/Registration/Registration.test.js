import { render, screen } from "@testing-library/react";
import Registration from ".";

describe("renders learn react link", () => {
  beforeEach(() => {
    render(<Registration />);
  });

  test("renders learn react link", () => {
    const linkElement = screen.getByText(/submit/i);
    expect(linkElement).toBeInTheDocument();
  });
});
