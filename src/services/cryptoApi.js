import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "88d32c8628mshdcb347903c48cc8p19a3afjsnd88ff9523962",
}

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) =>  createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const {
    useGetCryptosQuery,
} = cryptoApi;