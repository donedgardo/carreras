import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createLobby?: Maybe<Lobby>;
  joinLobby?: Maybe<Lobby>;
  createPostItCard?: Maybe<PostItCard>;
};


export type MutationCreateLobbyArgs = {
  input?: Maybe<CreateLobbyInput>;
};


export type MutationJoinLobbyArgs = {
  input?: Maybe<JoinLobbyInput>;
};


export type MutationCreatePostItCardArgs = {
  input?: Maybe<CreatePostItCardInput>;
};

export type CreateLobbyInput = {
  name: Scalars['String'];
};

export type JoinLobbyInput = {
  id: Scalars['ID'];
};

export type CreatePostItCardInput = {
  text: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  host?: Maybe<Lobby>;
};

export type Lobby = {
  __typename?: 'Lobby';
  id: Scalars['ID'];
  name: Scalars['String'];
  postIts?: Maybe<Array<Maybe<PostItCard>>>;
  members?: Maybe<Array<Maybe<User>>>;
};

export type PostItCard = {
  __typename?: 'PostItCard';
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )> }
);


export const MeDocument = gql`
    query ME {
  me @client {
    id
    username
  }
}
    `;
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>;

    export const MeComponent = (props: MeComponentProps) => (
      <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
    );
    
export type MeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<MeQuery, MeQueryVariables>
    } & TChildProps;
export function withMe<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MeQuery,
  MeQueryVariables,
  MeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, MeQuery, MeQueryVariables, MeProps<TChildProps, TDataName>>(MeDocument, {
      alias: 'me',
      ...operationOptions
    });
};
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;