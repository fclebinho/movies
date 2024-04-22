import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getWinningFilms } from "../services/api";

export const useFetchWinningFilms = () => {
  const [params] = useSearchParams();
  const year = params.get("year");

  const { isPending, error, data } = useQuery({
    queryKey: ["movies", year],
    queryFn: () => getWinningFilms(params.toString()),
  });

  return { isPending, error, data };
};
