import { useQuery } from "@tanstack/react-query";

const useFetch = (url, key) => {
  const {
    data,
    isLoading: IsLoading,
    error: error,
  } = useQuery({
    queryKey: [key],
    queryFn: () =>
      fetch(url).then((res) => {
        return res.json();
      }),
  });

  return {
    data,
    IsLoading,
    error,
  };
};
export default useFetch;
