import styled from "styled-components";

import ImgDeFundoComChildren from "../src/components/layout/imgDeFundoComChildren/ImgDeFundoComChildren";
import Logo from "../src/components/logo/Logo";
import PesquisarCidade from "../src/components/pesquisarCidade/PesquisarCidade";

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;

  @media (max-width: 500px) {
    min-width: 100%;
  }
`;

const EstiloInput = styled(PesquisarCidade)`
  width: 100%;
  box-sizing: border-box;
`;

const InputContainer = styled.div`
  @media (min-width: 750px) {
    width: 150%;
  }
  z-index: 100;
`;

export default function HomePage() {
  return (
    <ImgDeFundoComChildren>
      <StyledDiv>
        <Logo imageLogo tipo="vertical" />
        <InputContainer>
          <EstiloInput />
        </InputContainer>
      </StyledDiv>
    </ImgDeFundoComChildren>
  );
}
