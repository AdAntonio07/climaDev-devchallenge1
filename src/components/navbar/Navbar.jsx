import styled from "styled-components";

import Logo from "../logo/Logo";
import Container from "../layout/container/Container";

const EstiloNavbar = styled.div`
  height: 115px;
  display: flex;
  align-items: center;
`;

export default function Navbar() {
  return (
    <EstiloNavbar>
      <Container>
        <Logo />
      </Container>
    </EstiloNavbar>
  );
}
