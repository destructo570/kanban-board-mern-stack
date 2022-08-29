import styled from "@emotion/styled/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  margin: ${({ margin }) => (margin ? margin : "0px")};
  padding: ${({ padding }) => (padding ? padding : "0px")};
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  justify-content: ${({ justify }) => (justify ? justify : "inherit")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "inherit")};
  background-color: ${({ bgColor, theme }) =>
    bgColor ? bgColor : theme.colors.primary};
  cursor: ${({ cursor }) => (cursor ? cursor : "auto")};

  /* Conditional Hover BG Color */
  ${(props) =>
    props.canHover &&
    `
    &:hover{
      background-color: ${props.theme.colors.secondaryLight};
    }
  `}

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }
`;
