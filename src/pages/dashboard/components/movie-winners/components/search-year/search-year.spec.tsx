import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import render from "../../../../../../tests/utils";
import SearchYear from ".";
import { Wrapper } from "../../../../../../tests/utils/wrapper";

describe("Search Year Component", () => {
  it("Should render component", () => {
    render(
      <Wrapper>
        <SearchYear />
      </Wrapper>
    );

    expect(screen).toBeTruthy();
  });

  it("Should show test text to the placeholder", () => {
    render(
      <Wrapper>
        <SearchYear placeholder="test text" />
      </Wrapper>
    );

    expect(screen.getByPlaceholderText("test text")).toBeTruthy();
  });
});
