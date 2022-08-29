import styled from "@emotion/styled/macro";

export const InputWrapper = styled.div`
  margin: ${({ margin }) => (margin ? margin : "0.5em 0")};
  padding: ${({ padding }) => (padding ? padding : "0px")};
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 1em;
  background-color: ${(props) => props.theme.colors.secondaryLight};
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const InputError = styled.p`
  font-size: 0.85rem;
  padding: 0.5em 1em;
  margin: 0;
  color: ${(props) => props.theme.colors.textHighlight};
`;
