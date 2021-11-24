import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "helpers/colors";

export const NavLink = ({ label, route }) => {
  const [style, setStyle] = useState('');

  useEffect(() => {
    const local = window.location.href.split('/')[3].toLowerCase();

    if (route === `/${local}`) {
      setStyle(`
        border-bottom: solid 1px ${colors.primaryGreen};
      `);
    }
  }, [route]);
  return (
    <LinkComponent to={route} atualpage={style}>
      {label} 
    </LinkComponent>
  );
};

const LinkComponent = styled(Link)`
  color: ${colors.black};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  ${(props) => props.atualpage}
  :hover {
    border-bottom: solid 1px ${colors.primaryGreen};
  }
`;
