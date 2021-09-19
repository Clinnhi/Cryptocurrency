import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CryptoNewsHeadrs = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "88d32c8628mshdcb347903c48cc8p19a3afjsnd88ff9523962",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: CryptoNewsHeadrs });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery} = cryptoNewsApi;