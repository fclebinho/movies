import { useQuery } from "@tanstack/react-query";
import { getWinners } from "../services/api";

export const useFetchWinners = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["winners"],
    queryFn: () => getWinners(),
  });

  return { isPending, error, data };
};
