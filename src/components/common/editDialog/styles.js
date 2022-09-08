import styled from "@emotion/styled/macro";

export const EditPane = styled.div`
  border-radius: 8px;
  margin: 1em;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  position: fixed;
  top: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 500;
  animation-duration: 0.25s;
  animation-name: slidein2;
  padding: 2em;

  background-color: ${(props) => props.theme.colors.background};

  @keyframes slidein2 {
    from {
      top: 150px;
    }

    to {
      top: 100px;
    }
  }

  @media (min-width: ${(props) => props.theme.media.medium}) {
    margin: 0 auto;
    max-width: 500px;
  }
`;

export const EditTitle = styled.h3`
  text-align: left;
  width: 100%;
  color: ${(props) => props.theme.colors.textPrimary};
`;
