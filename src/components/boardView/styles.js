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
