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
  const [lobbyName, setLobbyName] = useState(null);

  const setUsernameCB = useCallback((e)=> { setUsername(e.target.value) }, [])
  const setLobbyNameCB = useCallback((e)=> { setLobbyName(e.target.value) }, [])

  return (
    <AppContainer>
      <TextInput data-cy="user-name-input" value={username} onChange={setUsernameCB} placeholder={"Username"}/>
      <TextInput data-cy="lobby-name-input" value={lobbyName} onChange={setLobbyNameCB} placeholder={"Lobby Name"}/>
      <Link href={`/lobby/create/${lobbyName}`}>
        <Button data-cy="create-lobby-button" disabled={!username || !lobbyName }>Create Lobby</Button>
      </Link>
      <Link href="/lobby/join">
        <StyledLink data-cy="join-lobby-link">Join Lobby</StyledLink>
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
