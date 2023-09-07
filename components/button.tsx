import styled from "styled-components";

const StyledButton = styled.button`
  color: ${(props: any) => props.theme.colors.primary};
  background-color: white;
`;

export default StyledButton;
