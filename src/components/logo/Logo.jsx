import styled from "styled-components";

const Img = styled.img``;

const TextoVertical = styled.h1`
  font-size: 80px;
  color: ${(props) => props.theme.colors.black};
  line-height: 70px;
  margin-left: 150px;
  margin-top: -80px;
`;

const PrimaryColor = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

export default function Logo({ imageLogo, tipo }) {
  return (
    <div>
      {imageLogo && <Img src="/woman.svg" />}
      {tipo === "vertical" && (
        <TextoVertical>
          Clima <br />
          <PrimaryColor>DEV</PrimaryColor>
        </TextoVertical>
      )}
    </div>
  );
}
