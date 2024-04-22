import { useQuery } from "@tanstack/react-query";
import { getPaginatedMovies } from "../services/api";
import { useSearchParams } from "react-router-dom";

export const useFetchPaginatedMovies = (perPageCount: string) => {
  const [searchParams] = useSearchParams({
    _page: "1",
    _per_page: perPageCount,
  });

  const year = searchParams.get("year");
  const winner = searchParams.get("winner");
  const perPage = searchParams.get("_perPage");
  const page = searchParams.get("_page");

  const { isPending, error, data } = useQuery({
    queryKey: ["movies", year, winner, perPage, page],
    queryFn: () => getPaginatedMovies(searchParams.toString()),
  });

  return { isPending, error, data };
};
