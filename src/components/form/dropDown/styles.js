import styled from "@emotion/styled/macro";

export const Container = styled.div`
  cursor: pointer;
  min-width: 200px;
  color: ${(props) => props.theme.colors.textPrimary};
  width: ${({ width }) => (width ? width : "auto")};

  /* Disable Text Select */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  position: relative;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;

  @media (min-width: ${(props) => props.theme.media.medium}) {
    display: none;
  }
`;
export const Pane = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  justify-content: ${({ justify }) => justify};
  padding: 0 1em;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryLight};
  }
`;
export const CurrentItem = styled.p`
  text-transform: capitalize;
  font-weight: 700;
`;
export const DropDownList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  justify-content: ${({ justify }) => justify};
  position: absolute;
  min-width: 200px;
  width: 100%;
  margin: 0;
  margin-top: 0.5em;
  padding: 0;
  list-style: none;
`;
export const DropDownItem = styled.li`
  padding: 1em;
  text-transform: capitalize;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryLight};
  }
`;
export const Image = styled.img``;
