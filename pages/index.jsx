import styled from "styled-components";

import ImgDeFundoComChildren from "../src/components/imgDeFundoComChildren/imgDeFundoComChildren";

const StyledDiv = styled.div`
  background-color: red;
`;

export default function HomePage() {
  return (
    <ImgDeFundoComChildren>
      <StyledDiv>Pagina inicial</StyledDiv>
    </ImgDeFundoComChildren>
  );
}
