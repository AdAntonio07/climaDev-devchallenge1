import styled from "styled-components";

const EstiloInput = styled.input`
  background-color: #f6f6f6;
  border: 0;
  outline: none;
  padding: 20px;
  color: #9c9c9c;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000040;
  width: 100%;
`;

function Input(props) {
  return <EstiloInput type="text" {...props} />;
}

export default Input;
