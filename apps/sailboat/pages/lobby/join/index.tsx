import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Link  from 'next/link';
import { TextInput, Button, Link as StyledLink } from "@carreras/ui";
import {initializeApollo} from "@carreras/apollo-client";

const AppContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Index = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  const [username, setUsername] = useState(null);
  const [lobbyId, setLobbyId] = useState(null);

  const setUsernameCB = useCallback((e)=> { setUsername(e.target.value) }, [])
  const setLobbyIdCB = useCallback((e)=> { setLobbyId(e.target.value) }, [])

  return (
    <AppContainer>
      <TextInput data-cy="user-name-input" value={username} onChange={setUsernameCB} placeholder={"Username"}/>
      <TextInput data-cy="lobby-id-input" value={lobbyId} onChange={setLobbyIdCB} placeholder={"Lobby #ID"}/>
      <Link href={`/lobby/join/${lobbyId}`}>
        <Button data-cy="join-lobby-button" disabled={!username || !lobbyId }>Join Lobby</Button>
      </Link>
      <Link href="/lobby/create">
        <StyledLink data-cy="create-lobby-link">Create Lobby</StyledLink>
      </Link>
    </AppContainer>

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
