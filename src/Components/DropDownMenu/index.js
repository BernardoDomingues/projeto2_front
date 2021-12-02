import styled from "styled-components";
import colors from "helpers/colors";

const DropDownMenu = styled.div`
position: absolute;
display: ${(props) => props.display};
background-color: ${colors.white};
box-shadow: 5px 3px 30px rgba(50, 50, 50, 0.2);
`;

export default DropDownMenu;