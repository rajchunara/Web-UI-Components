import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarItemsContainer = styled.div`
  padding-top: 20px;
  height: 100%;

  overflow: scroll;
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
