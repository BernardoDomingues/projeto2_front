import styled from "styled-components";
import colors from "helpers/colors";

export const ItemMenu = styled.div`
  list-style: none;
  padding: 10px;
  cursor: pointer;
  :hover{
    background-color: ${colors.secondaryGreen};
    color: ${colors.white};
  }
`;