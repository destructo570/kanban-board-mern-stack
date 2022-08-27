import styled from "@emotion/styled/macro";

export const NavigationPane = styled.nav`
  padding: 0.75em;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
`;

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primaryAccent};
  align-self: center;
  padding: 0.2em 0.5em;
  border-radius: 100px;
  span {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.media.medium}) {
    border-radius: 8px;
    padding: 0.5em 1em;
    span {
      display: block;
      margin-left: 0.5em;
    }
  }
`;

export const ImageIcon = styled.img``;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 1em;
`;
