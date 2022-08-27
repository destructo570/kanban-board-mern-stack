import styled from "@emotion/styled/macro";

export const CardContainer = styled.div`
  padding: 0.5em 0.8em;
  margin-top: 1em;
  max-width: 320px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.secondary};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondaryLight};
  }
`;

export const Title = styled.h3``;

export const SubTitle = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.textSecondary};
`;
