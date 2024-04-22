import styled from "styled-components";

import Navbar from "../../../src/components/navbar/Navbar";
import Container from "../../../src/components/layout/container/Container";

const Body = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
  min-height: 100vh;
`;
const Conteudo = styled.div`
  padding: 80px 0;
`;
const Texto = styled.p`
  font-size: 20px;
  padding: 0;
  margin: 0;
`;
const NomeDaCidade = styled.h2`
  font-size: 60px;
  padding: 0;
  margin: 0;
`;

export default function InfoPage() {
  return (
    <>
      <Navbar />
      <Body>
        <Container>
          <Conteudo>
            <Texto>Previsão do tempo para</Texto>
            <NomeDaCidade>Seara, SC, Brasil</NomeDaCidade>
          </Conteudo>
        </Container>
      </Body>
    </>
  );
}
