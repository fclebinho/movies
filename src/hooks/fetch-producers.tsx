import { useQuery } from "@tanstack/react-query";
import { getProducers } from "../services/api";

export const useFetchProducers = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["producers"],
    queryFn: () => getProducers(),
  });

  return { isPending, error, data };
};
