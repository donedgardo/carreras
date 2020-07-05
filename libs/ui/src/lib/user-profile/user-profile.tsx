import React from 'react';

import styled from 'styled-components';
import ME_QUERY from "./me.query.graphql";
import {useQuery} from "@apollo/client";
import {MeQuery} from "@carreras/graphql-codegen";

/* eslint-disable-next-line */
export interface UserProfileProps {}

const StyledUserProfile = styled.div`
  color: pink;
`;

export const UserProfile = (props: UserProfileProps) => {
  const { data, loading, error } = useQuery<MeQuery>(ME_QUERY);
  console.log(data, loading , error);
  return (
    <StyledUserProfile>
      <span>Welcome {!loading && data ? data.me.username: ""}!</span>
    </StyledUserProfile>
  );
};

export default UserProfile;
