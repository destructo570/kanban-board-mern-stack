import styled from "@emotion/styled/macro";

export const MoreOptionsPane = styled.div`
  svg:hover {
    background-color: ${(props) => props.theme.colors.popupHover};
  }
`;

export const OptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  justify-content: ${({ justify }) => justify};
  position: absolute;
  min-width: 100px;
  margin: 0;
  margin-top: 0.5em;
  padding: 0;
  list-style: none;

  li:first-of-type {
    border-radius: 6px 6px 0 0;
  }

  li:last-of-type {
    border-radius: 0px 0px 6px 6px;
  }
`;

export const OptionItem = styled.li`
  padding: 0.5em;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.textPrimary};
  background-color: ${(props) => props.theme.colors.popupBg};
  &:hover {
    background-color: ${(props) => props.theme.colors.popupHover};
  }
`;
