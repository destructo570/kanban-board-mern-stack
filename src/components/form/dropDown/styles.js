import styled from "@emotion/styled/macro";

export const Container = styled.div`
  cursor: pointer;
`;
export const Pane = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  justify-content: ${({ justify }) => justify};
  position: relative;
`;
export const CurrentItem = styled.p`
  font-weight: 700;
`;
export const DropDownList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  justify-content: ${({ justify }) => justify};
  position: absolute;
  min-width: 200px;
`;
export const DropDownItem = styled.p``;
export const Image = styled.img``;
