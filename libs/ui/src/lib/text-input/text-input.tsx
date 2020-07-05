import React, {FunctionComponent} from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TextInputProps {
  'data-cy'?: string;
  value?: string;
  onChange?: (e) => void;
  placeholder?: string;
  disabled?: boolean;
}

const StyledTextInput = styled.input`
  width: 251px;
  height: 58px;
  padding: 15px 69px;
  border: 2px solid black;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
`;

export const TextInput:FunctionComponent<TextInputProps> = (props) => {
  return (
    <StyledTextInput type="text" data-cy={props['data-cy']} {...props}>
      {props.children}
    </StyledTextInput>
  );
};

export default TextInput;
