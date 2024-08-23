import { DefaultError, useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { LoginModalAtom } from "@/utils/state/LoginModalAtom";
import { authAtom } from "@/utils/auth/authAtom";
import { getLocalStorageToken } from "@/actions/utils/getLocalStorageToken";
import { ErrorCode } from "@/actions/error/types";
import { useRouter } from "next/router";

interface UseAuthenticatedQueryOptions<TQueryFnData, TError, TData> extends UseQueryOptions<TQueryFnData, TError, TData> {
  queryFunc: () => Promise<TQueryFnData>;
}
function hasMessage(error: unknown): error is { message: string } {
    return (
      typeof error === "object" &&
      error !== null &&
      "message" in error &&
      typeof (error as any).message === "string"
);
}
export function useAuthenticatedQuery<TQueryFnData = unknown, TError = DefaultError, TData = TQueryFnData>(
  options: UseAuthenticatedQueryOptions<TQueryFnData, TError, TData>
) {
  const { queryFunc,queryKey, ...queryOptions } = options;
  const token = getLocalStorageToken();
  const setAuth = useSetRecoilState(authAtom);
  const setLoginModalState = useSetRecoilState(LoginModalAtom);

  const { error, data, isLoading, isSuccess } = useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      const res = await queryFunc();
      return res;
    },
    retry: !token && 0, 
    ...queryOptions,
  });
  

  useEffect(() => {
    if (hasMessage(error) && (error.message === ErrorCode.UNAUTHORIZED || error.message === ErrorCode.JWT_EXPIRED)) {
      console.log(error.message);
      setAuth({ isAuthenticated: false });
      setLoginModalState({ isOpen: true });
    }
  }, [error, setAuth, setLoginModalState]);

  return { error, data, isLoading, isSuccess };
}
