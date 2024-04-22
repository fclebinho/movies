import { useQuery } from "@tanstack/react-query";
import { getStudios } from "../services/api";

export const useFetchStudios = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["studios"],
    queryFn: () => getStudios(),
  });

  return { isPending, error, data };
};
