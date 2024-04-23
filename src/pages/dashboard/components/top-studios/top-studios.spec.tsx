import { beforeEach, describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import render from "../../../../tests/utils";
import TopStudios from ".";
import { Wrapper } from "../../../../tests/utils/wrapper";
import { useFetchStudios } from "../../../../hooks/fetch-studios";
import * as mock from "../../../../tests/mocks";

vi.mock("../../../../hooks/fetch-studios");

describe("Top Studios Component", () => {
  beforeEach(() => {
    vi.mocked(useFetchStudios).mockReturnValue({
      isPending: false,
      error: null,
      data: mock.studios,
    });
  });

  it("Should render component", () => {
    render(
      <Wrapper>
        <TopStudios />
      </Wrapper>
    );

    expect(screen).toBeTruthy();
  });

  describe("with a error", () => {
    beforeEach(() => {
      vi.mocked(useFetchStudios).mockReturnValue({
        isPending: false,
        error: Error("testing..."),
        data: undefined,
      });
    });

    it("", async () => {
      render(<TopStudios />);

      expect(await screen.findAllByText("An error has occurred: testing..."));
    });
  });

  it("Should show component caption", async () => {
    render(
      <Wrapper>
        <TopStudios />
      </Wrapper>
    );

    expect(await screen.getByText("Top 3 studios with winners"));
  });

  it("Should have Name and Win Count in the table headers", async () => {
    render(<TopStudios />);

    expect(await screen.getByText("Name"));
    expect(await screen.getByText("Win Count"));
  });

  it("Should have 3 records listed", async () => {
    render(
      <Wrapper>
        <TopStudios />
      </Wrapper>
    );

    const tableRows = await screen.getAllByRole("table-studio-item");

    expect(tableRows.length).toBe(3);
  });

  it("Should have predefined values in the table", () => {
    const studio = mock.studios[0];

    render(
      <Wrapper>
        <TopStudios />
      </Wrapper>
    );

    expect(screen.getAllByText(studio.name));
    expect(screen.getAllByText(studio.winCount));
  });
});
