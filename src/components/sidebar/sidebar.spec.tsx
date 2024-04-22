import { beforeEach, describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import render from "../../tests/utils";
import { Sidebar } from ".";
import { Wrapper } from "../../tests/utils/wrapper";

describe("Sidebar Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Should render component", () => {
    render(
      <Wrapper>
        <Sidebar />
      </Wrapper>
    );

    expect(screen).toBeTruthy();
  });
});
