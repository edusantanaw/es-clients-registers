import { useQuery } from "@tanstack/react-query";

interface props<T> {
  fetching: (data: unknown) => Promise<T[] | null>;
  key: string;
  params?: unknown;
  dependeces: unknown[];
}

export function useApi<T>({
  key,
  fetching,
  params,
  dependeces,
}: props<T>) {
  const { data, isLoading, isError } = useQuery(
    [key,  ...dependeces],
    async () => await fetching(params), 
  );

  return { data, isLoading, isError };
}
