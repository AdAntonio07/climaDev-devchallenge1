import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.black};
`;

export default function HomePage() {
  return <StyledDiv>Pagina inicial</StyledDiv>;
}
