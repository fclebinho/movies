import { beforeEach, describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import render from "../../../../tests/utils";
import MovieWinners from ".";
import { Wrapper } from "../../../../tests/utils/wrapper";
import { useFetchWinningFilms } from "../../../../hooks/fetch-winning-films";
import * as mock from "../../../../tests/mocks";

vi.mock("../../../../hooks/fetch-winning-films");

describe("Movie Winners Component", () => {
  beforeEach(() => {
    vi.mocked(useFetchWinningFilms).mockReturnValue({
      isPending: false,
      error: null,
      data: mock.movies,
    });
  });

  it("Should render component", () => {
    render(
      <Wrapper>
        <MovieWinners />
      </Wrapper>
    );

    expect(screen).toBeTruthy();
  });

  describe("with a error", () => {
    beforeEach(() => {
      vi.mocked(useFetchWinningFilms).mockReturnValue({
        isPending: false,
        error: Error("testing..."),
        data: undefined,
      });
    });

    it("Should display an error message when the result is an error", async () => {
      render(<MovieWinners />);

      expect(await screen.findAllByText("An error has occurred: testing..."));
    });
  });

  it("Should show component caption", () => {
    render(
      <Wrapper>
        <MovieWinners />
      </Wrapper>
    );

    expect(screen.getByText("List movie winners by year"));
  });

  it("Should have Id, Year and Title in the table headers", () => {
    render(
      <Wrapper>
        <MovieWinners />
      </Wrapper>
    );

    expect(screen.getByText("Id"));
    expect(screen.getByText("Year"));
    expect(screen.getByText("Title"));
  });

  it("Should render search field", () => {
    render(
      <Wrapper>
        <MovieWinners />
      </Wrapper>
    );

    expect(screen.getByTestId("search-text"));
  });
});
