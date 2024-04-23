import React from "react";
import { MovieList } from "./components/movie-list";

import { useFetchPaginatedMovies } from "../../hooks/fetch-paginated-movies";

const MoviesPage: React.FC = () => {
  const perPageCount = import.meta.env.VITE_PER_PAGE as string;
  const { isPending, error, data } = useFetchPaginatedMovies(perPageCount);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  return (
    <MovieList
      data={data}
      perPage={Number(perPageCount)}
      data-testid="movie-list"
    />
  );
};

export default MoviesPage;
