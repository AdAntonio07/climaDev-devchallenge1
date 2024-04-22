import styled from "styled-components";

const EstiloFlex = styled.div`
  display: flex;
`;

const EstiloDaImagem = styled.div`
  background-image: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`;

function ImgDeFundoComChildren({ children, image }) {
  return (
    <EstiloFlex>
      {children}
      <EstiloDaImagem image={image} />
    </EstiloFlex>
  );
}

ImgDeFundoComChildren.defaultProps = {
  image: "/background.png",
};

export default ImgDeFundoComChildren;
