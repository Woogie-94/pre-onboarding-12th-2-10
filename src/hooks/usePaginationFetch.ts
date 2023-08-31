import { AxiosResponse } from "axios";
import { useCallback, useRef, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface PaginationFetchResult<T = any> {
  data: AxiosResponse<T>["data"];
  nextPage: number | undefined;
}

interface Params<T> {
  initialData?: T[];
  fetchFn: (page?: number) => Promise<PaginationFetchResult<T[]>>;
}

const usePaginationFetch = <T>({ initialData = [], fetchFn }: Params<T>) => {
  const [data, setData] = useState<T[]>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const page = useRef<number | undefined>(undefined);

  const getFetchResult = useCallback((result: PaginationFetchResult<T[]>) => {
    page.current = result.nextPage;
    setData(prev => [...prev, ...result.data]);
    setIsLoading(false);
  }, []);

  const fetch = useCallback(() => {
    setIsLoading(true);
    return fetchFn().then(getFetchResult);
  }, [fetchFn, getFetchResult]);

  const fetchNextPage = useCallback(() => {
    if (!page.current) {
      return;
    }
    setIsLoading(true);
    return fetchFn(page.current).then(getFetchResult);
  }, [fetchFn, getFetchResult]);

  return { data, fetch, fetchNextPage, isLoading };
};

export default usePaginationFetch;
