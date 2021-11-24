import styled from "styled-components";
import colors from "helpers/colors";

const BigButton = styled.button`
  border: 0;
  margin: 0;
  background: ${colors.secondaryGreen};
  font-weight: 900;
  color:  ${colors.white};
  height: 40px;
  border-radius: 5px;
  transition: 0.3s;
  opacity: 1;
  cursor: pointer;

  :hover{
    opacity: 0.8;
  };

  @media (max-width: 1150px) {
    margin-bottom: 10px;
  }
`;

export default BigButton;
