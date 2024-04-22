import styled from "styled-components";

const EstiloContainer = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    width: 90%;
  }

  @media (min-width: 1500px) {
    width: 1440px;
  }
`;

const Container = ({ children }) => (
  <EstiloContainer>{children}</EstiloContainer>
);

export default Container;
