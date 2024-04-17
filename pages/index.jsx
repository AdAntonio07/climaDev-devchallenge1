import styled from "styled-components";

import ImgDeFundoComChildren from "../src/components/imgDeFundoComChildren/ImgDeFundoComChildren";
import Logo from "../src/components/logo/Logo";

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

export default function HomePage() {
  return (
    <ImgDeFundoComChildren>
      <StyledDiv>
        <Logo imageLogo tipo="vertical" />
        <input />
      </StyledDiv>
    </ImgDeFundoComChildren>
  );
}
