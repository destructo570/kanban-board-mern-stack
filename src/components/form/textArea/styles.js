import styled from "@emotion/styled/macro";

export const TextAreaWrapper = styled.div`
  margin: ${({ margin }) => (margin ? margin : "0.5em 0")};
  padding: ${({ padding }) => (padding ? padding : "0px")};
  width: ${({ width }) => (width ? width : "auto")};
`;

export const TextAreaLabel = styled.h4``;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 1em;
  overflow: hidden;
  resize: none;
  font-size: 0.85rem;
  line-height: 1.6em;
  background-color: ${(props) => props.theme.colors.secondaryLight};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const InputError = styled.p`
  font-size: 0.85rem;
  padding: 0.5em 1em;
  margin: 0;
  color: ${(props) => props.theme.colors.textHighlight};
`;
