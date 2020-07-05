import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { useConnect } from '@blockstack/connect';
import Router from 'next/router';
import { Button } from '@carreras/ui';
import { useQuery } from '@apollo/client';

import ME_QUERY from './me.query.graphql';
import { MeQuery } from '@carreras/graphql-codegen';

interface LoginButtonProps {}

export const LoginButton: FunctionComponent<LoginButtonProps> = () => {
  const { doOpenAuth, authData } = useConnect();
  const { data, loading, client } = useQuery<MeQuery>(ME_QUERY);
  const userSession = authData ? authData.userSession : null;
  const userData = userSession ? userSession.loadUserData() : null;

  const login = useCallback(() => {
    doOpenAuth();
  }, []);

  const goToApp = useCallback(() => {
    Router.push('/lobby/join');
  }, []);

  useEffect(() => {
    if (userData) {
      client.writeQuery({
        query: ME_QUERY,
        data: { me: { id: userData.username, username: userData.username } },
      });
    }
  }, [userData]);

  return (
    <>
      {!loading && data && data.me ? (
        <Button onClick={() => goToApp()}>
          Continue as {data.me.username}
        </Button>
      ) : (
        <Button onClick={() => login()}>Sign In</Button>
      )}
    </>
  );
};

export default LoginButton;
