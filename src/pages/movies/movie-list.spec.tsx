import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import render from "../../tests/utils";
import MoviesPage from ".";
import { Wrapper } from "../../tests/utils/wrapper";
import { useFetchPaginatedMovies } from "../../hooks/fetch-paginated-movies";
import * as mock from "../../tests/mocks";

vi.mock("../../hooks/fetch-paginated-movies");

describe("Movie List Page", () => {
  beforeEach(() => {
    vi.mocked(useFetchPaginatedMovies).mockReturnValue({
      isPending: false,
      error: null,
      data: mock.paginatedMovies,
    });
  });

  it("Should render movie list page", () => {
    render(
      <Wrapper>
        <MoviesPage />
      </Wrapper>
    );

    expect(screen).toBeTruthy();
  });

  describe("with a error", () => {
    beforeEach(() => {
      vi.mocked(useFetchPaginatedMovies).mockReturnValue({
        isPending: false,
        error: Error("testing..."),
        data: undefined,
      });
    });

    it("Should display an error message when the result is an error", async () => {
      render(
        <Wrapper>
          <MoviesPage />
        </Wrapper>
      );

      expect(await screen.findAllByText("An error has occurred: testing..."));
    });
  });

  it("Should show component caption", async () => {
    render(
      <Wrapper>
        <MoviesPage />
      </Wrapper>
    );

    expect(await screen.findAllByText("List movies"));
  });

  it("Should show multiple winners component", async () => {
    render(
      <Wrapper>
        <MoviesPage />
      </Wrapper>
    );

    expect(await screen.findByTestId("movie-list"));
  });
});
