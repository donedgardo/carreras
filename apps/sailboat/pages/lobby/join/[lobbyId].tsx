import React, { FunctionComponent } from 'react';
import {useRouter} from "next/router";
import {initializeApollo} from "@carreras/apollo-client";

interface LobbyPageProps {
}

export const LobbyJoin:FunctionComponent<LobbyPageProps>= () => {
  const router = useRouter();
  const { lobbyId } = router.query;
  return <p>{lobbyId}</p>
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

export default LobbyJoin;

