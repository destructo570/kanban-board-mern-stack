import styled from "@emotion/styled/macro";

export const ViewTaskPane = styled.section`
  border-radius: 8px;
  color: ${(props) => [props.theme.colors.textPrimary]};
  margin: 1em;
  max-width: 720px;
  display: flex;
  align-items: center;
  min-height: 80vh;
  /* min-height: 100vh; */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 200;

  @media (min-width: ${(props) => props.theme.media.medium}) {
    margin: 0 auto;
    max-width: 500px;
  }
`;

export const TaskTitle = styled.h3``;

export const TaskDescription = styled.p`
  color: ${(props) => [props.theme.colors.textSecondary]};
  font-size: 0.8rem;
  line-height: 1.75em;
  font-weight: 700;
`;

export const SubTaskTitle = styled.h4`
  font-size: 0.9rem;
`;

export const StatusTitle = styled.h4`
  font-size: 0.9rem;
`;

export const SubTaskListPane = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 0.8rem;
`;

export const SubTaskListItem = styled.li`
  background-color: ${(props) => [props.theme.colors.background]};
  padding: 0.25em 1em;
  border-radius: 8px;
  display: flex;
  align-items: center;

  & + & {
    margin-top: 0.5em;
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => [props.theme.colors.backgroundLight]};
  }
`;

export const SubTaskBody = styled.p`
  margin-left: 1em;
  line-height: 1.25em;
  font-weight: 700;

  color: ${({ state, theme }) =>
    state ? theme.colors.textSecondary : theme.colors.textPrimary};

  text-decoration: ${({ state }) => (state ? "line-through" : "")};
`;
