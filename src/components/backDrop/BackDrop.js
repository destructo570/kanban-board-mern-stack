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
  z-index: 100;
`;

export default function BackDrop({ children, onClick }) {
  return <BackDropPane onClick={onClick} />;
}
