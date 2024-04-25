import styled from "styled-components";
import Container from "../layout/container/Container";

const EstiloRodape = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  text-align: center;
  padding: 30px 0;
  font-weight: 400;
  font-size: 20px;
`;

export default function Rodape() {
  return (
    <EstiloRodape>
      Criado por <b>Antonio Ferreira</b> durante o{" "}
      <b>DevChallenge 01 - SejaDev</b>
    </EstiloRodape>
  );
}
