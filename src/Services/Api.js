import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (id) => `${id}`,
    }),
  }),
})

export const api = createApi({
    baseQuery: fetchBaseQuery({
      baseUrl: '127.0.0.1:8000',
    }),
    tagTypes: ['Pokemon'],
    endpoints: (build) => ({
        getPokemon: build.query({
          query: (id) => ({ url: `${id}` }),
          transformResponse: (response, meta, arg) => response.data,
          providesTags: (result, error, id) => [{ type: 'Pokemon', id }],
          async onQueryStarted(
            arg,
            {
              dispatch,
              getState,
              extra,
              requestId,
              queryFulfilled,
              getCacheEntry,
              updateCachedData,
            }
          ) {},
          async onCacheEntryAdded(
            arg,
            {
              dispatch,
              getState,
              extra,
              requestId,
              cacheEntryRemoved,
              cacheDataLoaded,
              getCacheEntry,
              updateCachedData,
            }
          ) {},
        }),
      }),
    })
  
export const { useGetPokemonByNameQuery } = pokemonApi
