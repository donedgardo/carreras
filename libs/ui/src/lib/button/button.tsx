import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
  'data-cy'?: string
  disabled?: boolean
}

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  padding: 15px 39px;
  position: static;
  height: 72px;
  align-items: center;
  justify-content:center;
  min-width: 289px;
  background: #E09393;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  font-family: Roboto;
  border: 0px;
  font-size: 36px;
  line-height:42px;
  color: #fff;
`;

export const Button: FunctionComponent<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <StyledButton data-cy={props['data-cy']} {...props}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
