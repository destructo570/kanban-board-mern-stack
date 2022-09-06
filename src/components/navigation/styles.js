import styled from "@emotion/styled/macro";

export const NavigationPane = styled.nav`
  padding: 0.75em;
  display: flex;
  width: 100%;
  align-items: center;
  position: fixed;
  z-index: 200;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.primary};
  max-height: 4em;
`;

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.2em 0.75em;
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 700;
  color: white;
  background-color: ${(props) => props.theme.colors.primaryAccent};

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryAccentLight};
  }

  span {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.media.medium}) {
    border-radius: 24px;
    padding: 0.5em 1.2em;
    position: absolute;
    right: 0px;
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
