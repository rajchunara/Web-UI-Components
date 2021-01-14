import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarItemsContainer = styled.div`
  padding-top: 20px;
  height: 85vh;

  overflow-x: hidden;
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #21252b;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background-color: #21252b;
    height: 80%;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #8d99aa;
  }
`;

const NavItems = styled.li`
  color: whitesmoke;
  list-style: none;
  margin: 7px 0px;
  font-weight: 700;
  font-size: 1.2em;
  text-decoration: none;
`;

const NavbarItems = () => {
  return (
    <NavbarItemsContainer>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <NavItems>About</NavItems>
      </Link>
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <NavItems>Shop</NavItems>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <NavItems>About</NavItems>
      </Link>
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <NavItems>Shop</NavItems>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <NavItems>About</NavItems>
      </Link>
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <NavItems>Shop</NavItems>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <NavItems>About</NavItems>
      </Link>
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <NavItems>Shop</NavItems>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <NavItems>About</NavItems>
      </Link>
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <NavItems>Shop</NavItems>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <NavItems>About</NavItems>
      </Link>
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <NavItems>Shop</NavItems>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <NavItems>About</NavItems>
      </Link>
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <NavItems>Shop</NavItems>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <NavItems>About</NavItems>
      </Link>
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <NavItems>Shop</NavItems>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <NavItems>About</NavItems>
      </Link>
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <NavItems>Shop</NavItems>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <NavItems>About</NavItems>
      </Link>
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <NavItems>Shop</NavItems>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <NavItems>About</NavItems>
      </Link>
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <NavItems>Shop</NavItems>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <NavItems>About</NavItems>
      </Link>
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <NavItems>Shop</NavItems>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <NavItems>About</NavItems>
      </Link>
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <NavItems>Shop</NavItems>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <NavItems>About</NavItems>
      </Link>
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <NavItems>Shop</NavItems>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <NavItems>About</NavItems>
      </Link>
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <NavItems>Shop</NavItems>
      </Link>
    </NavbarItemsContainer>
  );
};

export default NavbarItems;
