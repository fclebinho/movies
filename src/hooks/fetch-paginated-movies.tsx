import { useQuery } from "@tanstack/react-query";
import { getPaginatedMovies } from "../services/api";
import { useSearchParams } from "react-router-dom";

export const useFetchPaginatedMovies = (perPageCount: string) => {
  const [searchParams] = useSearchParams({
    page: "0",
    size: perPageCount,
  });

  const year = searchParams.get("year");
  const winner = searchParams.get("winner");
  const perPage = searchParams.get("size");
  const page = searchParams.get("page");

  const { isPending, error, data } = useQuery({
    queryKey: ["movies", year, winner, perPage, page],
    queryFn: () => getPaginatedMovies(searchParams.toString()),
  });

  return { isPending, error, data };
};
