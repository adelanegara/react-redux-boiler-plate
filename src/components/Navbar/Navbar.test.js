import React from "react";
import { screen, render } from "@testing-library/react";
import { NavbarUnwrapped } from ".";

let wrapper;
beforeEach(() => {
  const { getByTestId } = render(<NavbarUnwrapped />);
  wrapper = getByTestId("navbar");
});

test("test navbar", () => {
  expect(wrapper).toBeInTheDocument();
});

test("Test title", () => {
  const wrapper = screen.getByText(/CAR BOOKING/);
  expect(wrapper).toBeInTheDocument();
});

test("Test snapshot", () => {
  const wrapper = screen.getByText(/CAR BOOKING/);
  expect(wrapper).toMatchSnapshot();
});
