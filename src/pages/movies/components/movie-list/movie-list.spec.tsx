import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import render from "../../../../tests/utils";
import { MovieList } from ".";
import { Wrapper } from "../../../../tests/utils/wrapper";
import { Movie, PaginatedMovies } from "../../../../services/api";

const mockData: PaginatedMovies = {
  items: [
    {
      id: 1,
      year: 1980,
      title: "Can't Stop the Music",
      winner: "true",
      studios: [],
      producers: [],
    },
    {
      id: 2,
      year: 1980,
      title: "Cruising",
      winner: "false",
      studios: [],
      producers: [],
    },
    {
      id: 3,
      year: 1980,
      title: "The Formula",
      winner: "false",
      studios: [],
      producers: [],
    },
  ],
  first: 1,
  count: 12,
  last: 3,
  next: 2,
  pages: 3,
  prev: null,
};

describe("Movie List Page", () => {
  it("Should render movie list page", () => {
    render(
      <Wrapper>
        <MovieList data={mockData} perPage={5} />
      </Wrapper>
    );

    expect(screen).toBeTruthy();
  });

  it("Should show component caption", () => {
    render(
      <Wrapper>
        <MovieList data={mockData} perPage={5} />
      </Wrapper>
    );

    expect(screen.getByText("List movies"));
  });

  it("Should have Id, Year, Title and Winner in the table headers", async () => {
    render(
      <Wrapper>
        <MovieList data={mockData} perPage={5} />
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
        <MovieList data={mockData} perPage={5} />
      </Wrapper>
    );

    const tableRows = screen.getAllByRole("table-item");

    expect(tableRows.length).toBe(3);
  });

  it("Should have predefined values in the table", () => {
    const movie: Movie = mockData.items[0];

    render(
      <Wrapper>
        <MovieList data={mockData} perPage={5} />
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
          <MovieList data={mockData} perPage={5} />
        </Wrapper>
      );

      expect(screen.getByPlaceholderText("Filter by year"));
    });
  });

  describe("Winner Column", () => {
    it("Should render search by winner component", () => {
      render(
        <Wrapper>
          <MovieList data={mockData} perPage={5} />
        </Wrapper>
      );

      expect(screen.getByTestId("search_by_winner"));
    });
  });

  it("Should render pagination component", () => {
    render(
      <Wrapper>
        <MovieList data={mockData} perPage={5} />
      </Wrapper>
    );

    expect(screen.getByTestId("table-pagination"));
  });
});
