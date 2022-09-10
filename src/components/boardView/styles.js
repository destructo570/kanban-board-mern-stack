import styled from "@emotion/styled/macro";

export const BoardViewPane = styled.section`
  display: flex;
  padding-top: 4em;

  background-color: ${(props) => props.theme.colors.background};
  @media (min-width: ${(props) => props.theme.media.medium}) {
    padding-left: 250px;
  }
`;

export const StatusColumnsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

export const StatusColumnsListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 320px;
`;

export const StatusColumnsListItem = styled.li`
  margin-left: 1em;
`;

export const StatusTitle = styled.p`
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TaskItemContainer = styled.li``;

export const TaskListItemTitle = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;

  svg {
    width: 24px;
    padding: 0.1em;
  }

  svg:hover {
    background-color: ${(props) => props.theme.colors.secondaryAccent};
    border-radius: 8px;
  }
`;

export const AddColumnContainer = styled.div`
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4.5em 1em 1em 1em;
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: ${(props) => props.theme.colors.shadow} 0px 6px 12px -2px;
  width: 320px;
  max-height: 80px;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondaryLight};
  }
`;

export const AddColumnTitle = styled.p`
  font-weight: 700;
  font-size: 1.4em;
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const NoBoardsPane = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  min-height: 700px;
  color: ${(props) => props.theme.colors.textSecondary};

  @media (min-width: ${(props) => props.theme.media.medium}) {
    padding-left: 250px;
  }
`;
