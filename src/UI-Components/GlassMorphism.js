import React from "react";
import styled from "styled-components";

const GlassContainer = styled.div`
  padding: 2em 4em;
  height: 300px;
  border-radius: 10px;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  /* main properties to create glassmorphism */
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
`;

const OuterDisplayContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #effaff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  /* &:before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:linear-gradient(#f00, #f0f);
    clip-path:circle(20% at 90% 60%)
  }

  &:after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:linear-gradient(#2196f3, #e91e63);
    clip-path:circle(13% at 10% 10%)
  } */
`;

//Red Circle
const Circle1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  height: 350px;
  background: linear-gradient(#f00, #f0f);
  border-radius: 50%;
`;

//Blue Circle
const Circle2 = styled(Circle1)`
  background: linear-gradient(#00d2ff, #3a7bd5);
  top: 50%;
  left: 60%;
`;

const Square = styled.div`
  position: absolute;
  top: 150px;
  left: 50px;

  width: 200px;
  height: 200px;
  background-color: darkcyan;
`;

export default function GlassMorphism() {
  return (
    <OuterDisplayContainer>
      <Circle1></Circle1>
      <Circle2></Circle2>
      <GlassContainer>
        <h1>GlassMorphism</h1>
      </GlassContainer>
    </OuterDisplayContainer>
  );
}
