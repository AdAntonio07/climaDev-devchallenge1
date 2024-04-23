import styled from "styled-components";

const EstiloClimaCard = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 327px;
  padding: 15px;
  box-sizing: border-box;
`;
const Title = styled.h6`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding: 0;
  margin: 0;
`;
const InformacaoBasica = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InformacaoImg = styled.img`
  width: 100px;
  height: 100px;
`;
const InformacaoTexto = styled.div`
  text-align: center;
  flex: 1;
  font-weight: 600;
`;
const LinhaInfor = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 0 15px;
`;
const InforTemperatura = styled.span`
  font-weight: 700;

  ${(props) => props.blue && "color: #00C9F5"}
  ${(props) => props.red && "color: #FF0000"}
`;

export default function ClimaCarde() {
  return (
    <EstiloClimaCard>
      <Title>titulo</Title>
      <InformacaoBasica>
        <InformacaoImg src="http://openweathermap.org/img/wn/02d@2x.png" />
        <InformacaoTexto>Algumas nuvens</InformacaoTexto>
      </InformacaoBasica>
      <LinhaInfor>
        Temperatura<InforTemperatura>29°C</InforTemperatura>
      </LinhaInfor>
      <LinhaInfor>
        Sensaçao<InforTemperatura>32°C</InforTemperatura>
      </LinhaInfor>
      <LinhaInfor>
        Mínima<InforTemperatura blue>20°C</InforTemperatura>
      </LinhaInfor>
      <LinhaInfor>
        Máxima<InforTemperatura red>30°C</InforTemperatura>
      </LinhaInfor>
    </EstiloClimaCard>
  );
}
