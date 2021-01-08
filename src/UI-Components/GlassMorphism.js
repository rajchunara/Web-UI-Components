import React from "react";
import styled from "styled-components";

const GlassContainer = styled.div`
  /* width: 100px;
  height: 80px; */
  padding: 2em 4em;
  background-color: papayawhip;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OuterDisplayContainer = styled.div`
  position: relative;
  background-color: red;
  padding: 4em;
`;

export default function GlassMorphism() {
  return (
    <OuterDisplayContainer>
      <GlassContainer>
        <h1>GlassMorphism</h1>
      </GlassContainer>
    </OuterDisplayContainer>
  );
}
