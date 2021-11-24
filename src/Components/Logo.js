import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../assets/CineDataLogo.png";

const Logo = ({ extraStyle }) => {
  const history = useHistory();
  return (
    <Image
      src={LogoImage}
      alt="project logo"
      onClick={() => history.push("./")}
      extraStyle={extraStyle}
    />
  );
};

const Image = styled.img`
  ${(props) => props.extraStyle};
  cursor: pointer;

  @media screen and (max-width: 1035px) {
    margin-left: 10px;
  }
`;

export default Logo;
