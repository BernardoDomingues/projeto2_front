import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import colors from "./../../helpers/colors";
import { MdToc } from "react-icons/md";

import LogoImage from '../../assets/CineDataLogo.png'
import { NavLink } from "./NavLink";

const TopMenu = () => {
  const history = useHistory();
  return (
    <Nav>
      <Image src={LogoImage} alt="project logo" onClick={() => history.push('./')} />
      <Bars />
      <NavMenu>
        <NavLink route="/" label="Catálogo" />
        <NavLink route="/sobre" label="Sobre" />
      </NavMenu>
      <NavBtn>
        <NavButtonLink to="/entrar">Entrar</NavButtonLink>
      </NavBtn>
    </Nav>
  );
};

const Nav = styled.nav`
  background: ${colors.white};
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

const Bars = styled(MdToc)`
  display: none;
  color: ${colors.iconColor};
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavButtonLink = styled(Link)`
  border-radius: 4px;
  background: ${colors.primaryGreen};
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
`;

const Image = styled.img`
  cursor: pointer;

  @media screen and (max-width: 1035px) {
    margin-left: 10px;
  }
`;

export default TopMenu;
