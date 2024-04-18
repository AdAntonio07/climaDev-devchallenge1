import styled from "styled-components";

import Input from "../input/Input";

const SugestaoContainer = styled.div`
  margin-top: 10px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4px 4px 0px #00000040;
`;

const Sugestoes = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e4e4e4;
  }
`;

function InputComSugestao({ sugestoes, ...props }) {
  return (
    <>
      <Input {...props} />
      <SugestaoContainer>
        {sugestoes.map((sugestao, pos) => (
          <Sugestoes key={`sugestao-${pos}`} onClick={sugestao.onClick}>
            {sugestao.text}
          </Sugestoes>
        ))}
      </SugestaoContainer>
    </>
  );
}

InputComSugestao.defaultProps = {
  sugestoes: [
    { text: "Sugestão", onClick: () => {} },
    { text: "Sugestão 2", onClick: () => {} },
  ],
};

export default InputComSugestao;
