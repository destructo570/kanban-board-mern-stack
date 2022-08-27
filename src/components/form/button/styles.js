import styled from "@emotion/styled/macro";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 100px;
  font-family: "Open Sans", "sans-serif";
  font-weigth: bold;
  outline: none;
  border: none;
  border-radius: 6px;
  padding: 0.5em 0;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 1em 0;
  cursor: pointer;
`;
