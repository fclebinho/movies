export type Movie = {
  id: number;
  year: number;
  title: string;
  studios: string[];
  producers: string[];
  winner: boolean;
};

export type PaginatedMovies = {
  content: Movie[];
  pageable: {
    sort: {
      unsorted: boolean;
      sorted: boolean;
      empty: boolean;
    };
    offset: number;
    pageSize: number;
    pageNumber: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};

export type Winner = {
  year: number;
  winnerCount: number;
};

export type Producer = {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
};

export type ProducerResponse = {
  min: Producer[];
  max: Producer[];
};

export type Studio = {
  name: string;
  winCount: number;
};

const getMovies = async (filters: string) => {
  const params = filters ? `?${filters}` : "";

  return fetch(`${import.meta.env.VITE_HOST_API}/movies${params}`, {})
    .then((res) => res.json())
    .catch(() => []);
};

export const getPaginatedMovies = async (filters: string) => {
  return getMovies(filters)
    .then((res) => res as PaginatedMovies)
    .catch(() => ({ content: [] as Movie[] } as PaginatedMovies));
};

export const getWinningFilms = async (filters: string) => {
  return getMovies(filters)
    .then((res) => {
      console.log(res);

      return res as Movie[];
    })
    .catch(() => []);
};

export const getWinners = async () => {
  return fetch(
    `${
      import.meta.env.VITE_HOST_API
    }/movies?projection=years-with-multiple-winners`,
    {}
  )
    .then((res) => res.json().then((res) => res.years as Winner[]))
    .catch(() => []);
};

export const getStudios = async () => {
  return fetch(
    `${import.meta.env.VITE_HOST_API}/movies?projection=studios-with-win-count`,
    {}
  )
    .then((res) => res.json().then((res) => res.studios as Studio[]))
    .catch(() => []);
};

export const getProducers = async () => {
  return fetch(
    `${
      import.meta.env.VITE_HOST_API
    }/movies?projection=max-min-win-interval-for-producers`,
    {}
  )
    .then((res) => res.json().then((res) => res as ProducerResponse))
    .catch(() => []);
};
