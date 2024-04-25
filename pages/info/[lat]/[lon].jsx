import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styled from "styled-components";

import Navbar from "../../../src/components/navbar/Navbar";
import Container from "../../../src/components/layout/container/Container";
import ClimaCarde from "../../../src/components/climaCard/ClimaCard";

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
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

export default function InfoPage() {
  const [InformacaoAtual, setInformacaoAtual] = useState();
  const [InformacaoFutura, setInformacaoFutura] = useState();
  const router = useRouter();
  const { lat, lon } = router.query;

  const BuscaInforAtuais = async () => {
    const resposta = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}&units=metric&lang=pt_br`
    );
    const json = await resposta.json();
    setInformacaoAtual(json);
  };

  const BuscaInforFutura = async () => {
    const resposta = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}&units=metric&lang=pt_br`
    );
    const json = await resposta.json();
    setInformacaoFutura(json);
  };

  useEffect(() => {
    if (lat && lon) {
      BuscaInforAtuais();
      BuscaInforFutura();
    }
  }, [lat, lon]);

  console.log(InformacaoFutura);
  return (
    <>
      <Navbar />
      <Body>
        <Container>
          <Conteudo>
            <Texto>Previsão do tempo para</Texto>
            <NomeDaCidade>
              {InformacaoAtual?.name}, {InformacaoAtual?.sys.country}
            </NomeDaCidade>
          </Conteudo>
          <InfoContainer>
            <ClimaCarde
              title="Agora"
              icon={InformacaoAtual?.weather[0].icon}
              description={InformacaoAtual?.weather[0].description}
              temp={InformacaoAtual?.main.temp}
              feels={InformacaoAtual?.main.feels_like}
              min={InformacaoAtual?.main.temp_min}
              max={InformacaoAtual?.main.temp_max}
            />
            <ClimaCarde
              title="Próximas 5 horas"
              icon={InformacaoFutura?.list[0].weather[0].icon}
              description={InformacaoFutura?.list[0].weather[0].description}
              temp={InformacaoFutura?.list[0].main.temp}
              feels={InformacaoFutura?.list[0].main.feels_like}
              min={InformacaoFutura?.list[0].main.temp_min}
              max={InformacaoFutura?.list[0].main.temp_max}
            />
            <ClimaCarde
              title="Próximas 8 horas"
              icon={InformacaoFutura?.list[1].weather[0].icon}
              description={InformacaoFutura?.list[1].weather[0].description}
              temp={InformacaoFutura?.list[1].main.temp}
              feels={InformacaoFutura?.list[1].main.feels_like}
              min={InformacaoFutura?.list[1].main.temp_min}
              max={InformacaoFutura?.list[1].main.temp_max}
            />
          </InfoContainer>
        </Container>
      </Body>
    </>
  );
}
