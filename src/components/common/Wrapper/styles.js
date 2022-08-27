import styled from "@emotion/styled/macro";

export const Container = styled.div`
  display: flex;
  margin: ${({ margin }) => (margin ? margin : "0px")};
  padding: ${({ padding }) => (padding ? padding : "0px")};
  width: ${({ width }) => (width ? width : "auto")};
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  background-color: ${({ bgColor, theme }) =>
    bgColor ? bgColor : theme.colors.primary};
`;
