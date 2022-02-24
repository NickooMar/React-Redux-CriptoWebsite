import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "d7ba22ce95msh2539d32f4600051p1696bcjsnae3335940ae1",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });


export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`), //Get information from coins endpoint
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    
    // getCryptoHistory: builder.query({
    //   query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history?timeperiod=${timePeriod}`),
    // }),

    getExchanges: builder.query({
      query: () => createRequest(`/exchanges`), //Needs Ultra plan
    })

  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery } = cryptoApi;
