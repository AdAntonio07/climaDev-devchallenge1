import styled from "styled-components";

import ImgDeFundoComChildren from "../src/components/imgDeFundoComChildren/imgDeFundoComChildren";

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  min-width: 500px;

  @media (max-width: 500px) {
    min-width: 100%;
  }
`;

export default function HomePage() {
  return (
    <ImgDeFundoComChildren>
      <StyledDiv>Pagina inicial</StyledDiv>
    </ImgDeFundoComChildren>
  );
}
