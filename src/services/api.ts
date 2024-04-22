export type Movie = {
  id: number;
  year: number;
  title: string;
  winner: string;
  studios: string[];
  producers: string[];
};

export type PaginatedMovies = {
  items: Movie[];
  first: number;
  count: number;
  last: number;
  next: number | null;
  pages: number;
  prev: number | null;
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

  return fetch(`${import.meta.env.VITE_HOST_API}/movies${params}`, {}).then(
    (res) => res.json()
  );
};

export const getPaginatedMovies = async (filters: string) => {
  return getMovies(filters).then((res) => {
    return {
      items: res.data.map((e: Movie) => ({
        id: e.id,
        year: e.year,
        title: e.title,
        winner: e.winner,
      })),
      first: res.first,
      count: res.count,
      last: res.last,
      next: res.next,
      pages: res.pages,
      prev: res.prev,
    } as PaginatedMovies;
  });
};

export const getWinningFilms = async (filters: string) => {
  return getMovies(filters).then((res) => {
    return res.map((e: Movie) => ({
      id: e.id,
      year: e.year,
      title: e.title,
      winner: e.winner,
    })) as Movie[];
  });
};

export const getWinners = async () => {
  return fetch(`${import.meta.env.VITE_HOST_API}/winners`, {}).then((res) =>
    res.json().then((res) => {
      return res.map((e: Winner) => ({
        year: e.year,
        winnerCount: e.winnerCount,
      })) as Winner[];
    })
  );
};

export const getStudios = async () => {
  return fetch(`${import.meta.env.VITE_HOST_API}/studios`, {}).then((res) =>
    res.json().then((res) => {
      return res.map((e: Studio) => ({
        name: e.name,
        winCount: e.winCount,
      })) as Studio[];
    })
  );
};

export const getProducers = async () => {
  return fetch(`${import.meta.env.VITE_HOST_API}/producers`, {}).then((res) =>
    res.json().then((res) => {
      return {
        min: res.min.map((e: Producer) => ({
          producer: e.producer,
          interval: e.interval,
          previousWin: e.previousWin,
          followingWin: e.followingWin,
        })),
        max: res.max.map((e: Producer) => ({
          producer: e.producer,
          interval: e.interval,
          previousWin: e.previousWin,
          followingWin: e.followingWin,
        })),
      } as ProducerResponse;
    })
  );
};
