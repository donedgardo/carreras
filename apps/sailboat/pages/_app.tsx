import React from "react";
import { ApolloProvider } from '@apollo/client'
import { useApollo } from "@carreras/apollo-client";
import { Connect } from "@blockstack/connect";

const authOptions = {
  redirectTo: '/lobby/join',
  appDetails: {
    name: 'Sailboat App',
    icon: '/nx-logo-white.svg',
  },
};

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <Connect authOptions={authOptions}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Connect>
  )
}
