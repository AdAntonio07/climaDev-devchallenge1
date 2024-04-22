import styled from "styled-components";

const Img = styled.img``;

const TextoVertical = styled.h1`
  font-size: 80px;
  color: ${(props) => props.theme.colors.black};
  line-height: 70px;
  margin-left: 150px;
  margin-top: -80px;
`;

const TextoHorizontal = styled.h1`
  font-size: 40px;
`;

const PrimaryColor = styled.span`
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
`;

export default function Logo({ imageLogo, tipo }) {
  return (
    <div>
      {imageLogo && <Img src="/woman.svg" />}
      {tipo === "vertical" && (
        <TextoVertical>
          Clima <br />
          <PrimaryColor>Dev</PrimaryColor>
        </TextoVertical>
      )}
      {tipo === "horizontal" && (
        <TextoHorizontal>
          Clima<PrimaryColor>Dev</PrimaryColor>
        </TextoHorizontal>
      )}
    </div>
  );
}

Logo.defaultProps = {
  tipo: "horizontal",
};
