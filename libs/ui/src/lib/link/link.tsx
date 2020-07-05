import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LinkProps { 'data-cy'?: string }

const StyledLink = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-decoration-line: underline;
  color: #2F875D;
`;

export const Link: FunctionComponent<LinkProps> = (props) => {
  return (
    <StyledLink data-cy={props['data-cy']} {...props}>
      {props.children}
    </StyledLink>
  );
};

export default Link;
