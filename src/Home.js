import React, { useState } from "react";
import styled from "styled-components";

import { CloseButton, StyledNavBar } from "./Navbar";

const HomeContainer = styled.div`
  background-color: #ededed;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const LogoTitleH2 = styled.h2`
  color: rgb(223, 183, 109);
  margin: 0px;
  padding: 20px 10px;
  border-bottom: 2px solid #32373f;
  @media screen and (max-width: 850px) {
    padding: 0px 10px 5px 10px;
  }
`;

export default function HomeComponent() {
  const [navbarStatus, setNavbarStatus] = useState(true);

  const BurgerContainer = styled.div`
    margin-top: 20px;
    width: 100px;
    height: 20px;
    display: none;
    @media screen and (max-width: 850px) {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
    }

    :hover {
      cursor: pointer;
    }
  `;

  const BurgerLine = styled.div`
    width: 25px;
    height: 4px;
    background-color: #21252b;
    border-radius: 3px;
  `;

  const toggleNavbar = () => {
    console.log(navbarStatus);
    setNavbarStatus(!navbarStatus);
  };

  return (
    <HomeContainer>
      <BurgerContainer onClick={toggleNavbar}>
        <BurgerLine></BurgerLine>
        <BurgerLine></BurgerLine>
      </BurgerContainer>
      <StyledNavBar showNavbar={navbarStatus}>
        <CloseButton clickFn={toggleNavbar}>
          <h2>x</h2>
        </CloseButton>
        <div className="logo-container">
          <LogoTitleH2>UI Components</LogoTitleH2>
        </div>
      </StyledNavBar>
    </HomeContainer>
  );
}
