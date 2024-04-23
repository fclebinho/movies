import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import render from "../../tests/utils";
import Pagination from ".";
import { Wrapper } from "../../tests/utils/wrapper";

describe("Pagination Component", () => {
  it("Should render component", () => {
    render(
      <Wrapper>
        <Pagination pageCount={0} perPage={5} />
      </Wrapper>
    );

    expect(screen).toBeTruthy();
  });

  it("Should show 5 page buttons", () => {
    render(
      <Wrapper>
        <Pagination pageCount={5} perPage={5} />
      </Wrapper>
    );

    expect(screen.getByText("1"));
    expect(screen.getByText("2"));
    expect(screen.getByText("3"));
    expect(screen.getByText("4"));
    expect(screen.getByText("5"));
  });
});
