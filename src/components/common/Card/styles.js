import styled from "@emotion/styled/macro";

export const CardContainer = styled.div`
  padding: 0.5em 0.8em;
  margin-top: 1em;
  border-radius: 8px;
  width: ${({ width }) => (width ? width : "auto")};
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: ${(props) => props.theme.colors.shadow} 0px 6px 12px -2px;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondaryLight};
  }
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const SubTitle = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.textSecondary};
`;
