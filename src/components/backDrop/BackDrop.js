import React from "react";
import styled from "@emotion/styled/macro";

const BackDropPane = styled.div`
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 400;
  animation-duration: 0.25s;
  animation-name: fadein;

  @keyframes fadein {
    from {
      opacity: 0.4;
    }

    to {
      opacity: 1;
    }
  }
`;

export default function BackDrop({ children, onClick }) {
  return <BackDropPane onClick={onClick} />;
}
