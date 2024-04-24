import { beforeEach, describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import render from "../../../../tests/utils";
import { MultipleWinners } from ".";
import { useFetchWinners } from "../../../../hooks/fetch-winners";
import * as mock from "../../../../tests/mocks";

vi.mock("../../../../hooks/fetch-winners");

describe("Multiple Winners Component", () => {
  beforeEach(() => {
    vi.mocked(useFetchWinners).mockReturnValue({
      isPending: false,
      error: null,
      data: mock.winners,
    });
  });

  it("Should render component", () => {
    render(<MultipleWinners />);

    expect(screen).toBeTruthy();
  });

  describe("with a error", () => {
    beforeEach(() => {
      vi.mocked(useFetchWinners).mockReturnValue({
        isPending: false,
        error: Error("testing..."),
        data: undefined,
      });
    });

    it("Should display an error message when the result is an error", async () => {
      render(<MultipleWinners />);

      expect(await screen.findAllByText("An error has occurred: testing..."));
    });
  });

  it("Should show component caption", () => {
    render(<MultipleWinners />);

    expect(screen.getByText("List years with multiple winners"));
  });

  it("Should have Year and Win Count in the table headers", () => {
    render(<MultipleWinners />);

    expect(screen.getByText("Year"));
    expect(screen.getByText("Win Count"));
  });

  it("Should have 3 records listed", () => {
    render(<MultipleWinners />);

    const tableRows = screen.getAllByRole("table-item");

    expect(tableRows.length).toBe(3);
  });

  it("Should have predefined values in the table", () => {
    const winner = mock.winners[0];

    render(<MultipleWinners />);

    expect(screen.getAllByText(winner.year));
    expect(screen.getAllByText(winner.winnerCount));
  });
});
