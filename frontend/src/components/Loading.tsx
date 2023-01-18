import React from "react";
import styled from "styled-components";

export const Loading = () => {
  return (
    <LoadContainer>
      <IsLoadng />
    </LoadContainer>
  );
};

const LoadContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: animate;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  @keyframes animate {
    from {
      transform: rotate3d(0, 0, 0, 0);
    }
    to {
      transform: rotate3d(0, 0, 1, 380deg);
    }
  }
`;
export const IsLoadng = styled.div`
  height: 1.6em;
  width: 1.6em;
  border-radius: 50%;
  border: 1px solid #fff;
  border-top: 1px solid #ef233c;
  background-color: transparent;
`;
