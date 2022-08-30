import styled from "@emotion/styled/macro";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: "Open Sans", "sans-serif";
  outline: none;
  border: none;
  letter-spacing: 2px;
  border-radius: 8px;
  padding: 1em 0;
  font-weight: 700;
  margin: 1em 0;
  cursor: pointer;
  text-transform: ${({ textStyle }) => (textStyle ? textStyle : "none")};
  width: ${({ width }) => (width ? width : "100%")};
  color: ${(props) => props.theme.colors.textPrimary};
  background-color: ${(props) => props.theme.colors.primaryAccent};

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryAccentLight};
  }
`;
