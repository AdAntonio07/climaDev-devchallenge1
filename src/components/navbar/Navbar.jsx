import styled from "styled-components";
import { useRouter } from "next/router";

import Logo from "../logo/Logo";
import Container from "../layout/container/Container";

const EstiloNavbar = styled.div`
  height: 115px;
  display: flex;
  align-items: center;
`;
const EstiloLogo = styled.div`
  cursor: pointer;
`;

export default function Navbar() {
  const router = useRouter();
  return (
    <EstiloNavbar>
      <Container>
        <EstiloLogo onClick={() => router.push("/")}>
          <Logo />
        </EstiloLogo>
      </Container>
    </EstiloNavbar>
  );
}
