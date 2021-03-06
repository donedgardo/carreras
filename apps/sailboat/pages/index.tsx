import React, {
  FunctionComponent,
} from 'react';

import  { LoginButton } from '@carreras/ui';
import {initializeApollo} from "@carreras/apollo-client";

interface IndexProps {}

export const Index: FunctionComponent<IndexProps> = () => {
  return (
    <>
      <LoginButton />
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  /*
  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  })
  */

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}


export default Index;
