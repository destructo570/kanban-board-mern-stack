import styled from "@emotion/styled/macro";

export const BoardViewPane = styled.section``;

export const StatusColumnsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
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

export const AddColumnContainer = styled.div`
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.75em;
  background-color: ${(props) => props.theme.colors.secondary};
  margin-left: 1em;
  width: 320px;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondaryLight};
  }
  /* padding-top: 2em; */
`;

export const AddColumnTitle = styled.p`
  font-weight: 700;
  font-size: 1.4em;
  color: ${(props) => props.theme.colors.textSecondary};
`;
