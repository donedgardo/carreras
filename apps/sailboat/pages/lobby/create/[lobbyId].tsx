import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { initializeApollo } from '@carreras/apollo-client';
import { UserProfile } from '@carreras/ui';

interface LobbyPageProps {}

export const LobbyCreate: FunctionComponent<LobbyPageProps> = () => {
  const router = useRouter();
  const { lobbyId } = router.query;
  return (
    <>
      <p>
        {lobbyId}
        <UserProfile />
      </p>
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: ["/lobby/create/420"],
    fallback: true
  }
}

export default LobbyCreate;
