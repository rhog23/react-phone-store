import React, { Component } from "react";
// it is used to make a button that link to a page
import { Link } from "react-router-dom";

// import logo
import logo from "../logo.svg";
import styled from "styled-components";
// import button
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img
            src={logo}
            alt="store"
            className="navbar-brand"
            height="90"
            width="90"
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="icon ion-ios-cart"></i>
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.2rem;
    text-transform: capitalize;
  }
`;
