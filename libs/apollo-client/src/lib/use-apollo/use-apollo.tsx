import { useMemo } from 'react'
import { createApolloClient } from "@carreras/apollo-client";

let apolloClient;


export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient
};

export const useApollo = (initialState) => {
  return useMemo(() => initializeApollo(initialState), [initialState]);
};
