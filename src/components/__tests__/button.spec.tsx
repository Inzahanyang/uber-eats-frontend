import React from "react";
import { getByText, render } from "@testing-library/react";
import { Button } from "../button";

describe("<Button/>", () => {
  it("should render OK with props", () => {
    const { getByText, debug } = render(
      <Button canClick={true} loading={false} actionText="test" />
    );
    debug();
    getByText("test");
  });
  it("should display loading", () => {
    const { getByText, debug, container } = render(
      <Button canClick={false} loading={true} actionText="test" />
    );
    debug();
    getByText("Loading...");
    expect(container.firstChild).toHaveClass("pointer-events-none");
  });
});
