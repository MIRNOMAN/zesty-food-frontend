/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { RootState } from "../store";

import { toast } from "sonner";
import { logout } from "../authSlice";
import { TResponse, TUser } from "@/types";


const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("Authorization", `${token}`);
    }

    return headers;
  },
});

const baseQueryWithToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  const result = (await baseQuery(args, api, extraOptions)) as TResponse<TUser>;

  if (result.error?.data?.message === "Expired token") {
    toast.error("Login Expired");
    
    api.dispatch(logout());
    window.location.href = "/auth/sign-in";
  }

  if (result.error?.data?.message === "Your subscription has expired or is not active. Please subscribe to continue accessing this feature.") {
    if (typeof window !== "undefined") {
      window.location.href = "/refresh"; 
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithToken,
  tagTypes: [
  "Auth",
  "Users",
  "Reviews"
  ],
  endpoints: () => ({}),
});
