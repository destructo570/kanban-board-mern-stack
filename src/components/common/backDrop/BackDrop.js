import React from "react";
import styled from "@emotion/styled/macro";

const BackDropPane = styled.div`
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
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
