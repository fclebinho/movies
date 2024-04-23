import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import render from "../../../../tests/utils";
import { MovieList } from ".";
import { Wrapper } from "../../../../tests/utils/wrapper";
import { Movie } from "../../../../services/api";
import * as mock from "../../../../tests/mocks";

describe("Movie List Page", () => {
  it("Should render movie list page", () => {
    render(
      <Wrapper>
        <MovieList data={mock.paginatedMovies} perPage={5} />
      </Wrapper>
    );

    expect(screen).toBeTruthy();
  });

  it("Should show component caption", () => {
    render(
      <Wrapper>
        <MovieList data={mock.paginatedMovies} perPage={5} />
      </Wrapper>
    );

    expect(screen.getByText("List movies"));
  });

  it("Should have Id, Year, Title and Winner in the table headers", async () => {
    render(
      <Wrapper>
        <MovieList data={mock.paginatedMovies} perPage={5} />
      </Wrapper>
    );

    expect(await screen.findByText("ID"));
    expect(await screen.findByText("Year"));
    expect(await screen.findByText("Title"));
    expect(await screen.findByText("Winner?"));
  });

  it("Should have 3 records listed", () => {
    render(
      <Wrapper>
        <MovieList data={mock.paginatedMovies} perPage={5} />
      </Wrapper>
    );

    const tableRows = screen.getAllByRole("table-item");

    expect(tableRows.length).toBe(20);
  });

  it("Should have predefined values in the table", () => {
    const movie: Movie = mock.paginatedMovies.content[0];

    render(
      <Wrapper>
        <MovieList data={mock.paginatedMovies} perPage={5} />
      </Wrapper>
    );

    expect(screen.getAllByText(movie.id));
    expect(screen.getAllByText(movie.year));
    expect(screen.getAllByText(movie.title));
    expect(screen.getAllByText(movie.winner ? "Yes" : "No"));
  });

  describe("Year Column", () => {
    it("Should render search by year component", () => {
      render(
        <Wrapper>
          <MovieList data={mock.paginatedMovies} perPage={5} />
        </Wrapper>
      );

      expect(screen.getByPlaceholderText("Filter by year"));
    });
  });

  describe("Winner Column", () => {
    it("Should render search by winner component", () => {
      render(
        <Wrapper>
          <MovieList data={mock.paginatedMovies} perPage={5} />
        </Wrapper>
      );

      expect(screen.getByTestId("search_by_winner"));
    });
  });

  it("Should render pagination component", () => {
    render(
      <Wrapper>
        <MovieList data={mock.paginatedMovies} perPage={5} />
      </Wrapper>
    );

    expect(screen.getByTestId("table-pagination"));
  });
});
