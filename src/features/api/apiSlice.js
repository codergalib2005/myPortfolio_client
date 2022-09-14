import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://my-portfolio-server-one.vercel.app/api",
  }),
  tagTypes: ["FolioItems"],
  endpoints: (builder) => ({
    // Get All Portfolios
    getPortfolios: builder.query({
      query: () => "/projects",
      providesTags: ["FolioItems"],
    }),
    getAPortfolio: builder.query({
      query: (id) => `/projects/${id}`,
    }),
  }),
});

// Export all handler
export const { useGetPortfoliosQuery, useGetAPortfolioQuery } = apiSlice;
