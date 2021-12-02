import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import styled from "styled-components";
import colors from "helpers/colors";
import { MdToc } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

import { useLogin } from 'providers/login';

import Logo from "../Logo";
import { NavLink } from "./NavLink";
import DropDownMenu from "Components/DropDownMenu";
import { ItemMenu } from 'Components/DropDownMenu/ItemMenu';

const TopMenu = () => {
  const { loginAuth, userData } = useLogin();
  const [userMenuState, setUserMenuState] = useState(false);
  const history = useHistory();

  const openMenu = (state) => {
    if (state) {
      return '';
    } return 'none';
  };

  const handleLogout = () => {
    Cookies.remove("user");
    Cookies.remove("userName");
    history.go(0);
  }

  return (
    <Nav>
      <Logo />
      <Bars />
      <NavMenu>
        {loginAuth && (<NavLink route="/perfil" label="Feed" />)}
        <NavLink route="/" label="Catálogo" />
        <NavLink route="/sobre" label="Sobre" />
      </NavMenu>
      <NavBtn>
        {!loginAuth && (<NavButtonLink to="/login">Entrar</NavButtonLink>)}
        {loginAuth && (<UserOptions onClick={() => setUserMenuState(!userMenuState)}><UserIcon />{userData}</UserOptions>)}
        <Menu display={openMenu(userMenuState)}>
          <ItemMenu onClick={() => handleLogout()}>Logout</ItemMenu>
          <ItemMenu onClick={() => history.push("/perfil")}>Perfil</ItemMenu>
        </Menu>
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

const UserOptions = styled.span`
  cursor: pointer;
  color: ${colors.primaryGreen};
  :hover {
    opacity: 0.8;
  }
`;

const UserIcon = styled(FaRegUser)`
  margin-right: 6px;
`;

const Menu = styled(DropDownMenu)`
  top: 43px;
  right: 291px;

  @media(max-width: 1300px) {
    right: 80px;
  }

  @media(max-width: 1100px) {
    right: 30px;
  }
`;

export default TopMenu;
