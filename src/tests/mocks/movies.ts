import { PaginatedMovies } from "../../services/api";

export const movies = [
  {
    id: 1,
    year: 1900,
    title: "Movie Title 1",
    studios: ["Studio Name 1"],
    producers: ["Producer Name 1"],
    winner: "false",
  },
  {
    id: 2,
    year: 1900,
    title: "Movie Title 2",
    studios: ["Studio Name 2"],
    producers: ["Producer Name 2"],
    winner: "false",
  },
  {
    id: 3,
    year: 1900,
    title: "Movie Title 3",
    studios: ["Studio Name 3"],
    producers: ["Producer Name 3"],
    winner: "true",
  },
  {
    id: 4,
    year: 1900,
    title: "Movie Title 4",
    studios: ["Studio Name 4"],
    producers: ["Producer Name 4"],
    winner: "false",
  },
  {
    id: 5,
    year: 1900,
    title: "Movie Title 5",
    studios: ["Studio Name 5"],
    producers: ["Producer Name 5"],
    winner: "false",
  },
  {
    id: 6,
    year: 1900,
    title: "Movie Title 6",
    studios: ["Studio Name 6"],
    producers: ["Producer Name 6"],
    winner: "false",
  },
];

export const paginatedMovies: PaginatedMovies = {
  first: 1,
  prev: null,
  next: 2,
  last: 3,
  pages: 3,
  count: 12,
  items: movies,
};
