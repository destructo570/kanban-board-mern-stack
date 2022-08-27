import styled from "@emotion/styled/macro";

export const SwitchPane = styled.div`
  max-height: 24px;
  min-width: 50px;
  margin: 0 1em;
  padding: 0.3em;
  border-radius: 50px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  background-color: ${({ isOn, theme }) =>
    isOn ? theme.colors.primaryAccent : theme.colors.secondaryLight};
  justify-content: ${({ isOn }) => (isOn ? "flex-end" : "flex-start")};

  transition-duration: 0.2s;
  transition-property: background-color;
  &:hover {
    cursor: pointer;
  }
`;

export const SwitchCircle = styled.button`
  display: inline-block;
  min-height: 16px;
  min-width: 16px;
  border-radius: 50px;
  background-color: white;
  outline: none;
  border: none;
`;
