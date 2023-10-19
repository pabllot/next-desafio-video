import { Container, Title, Wrapper } from "./styles";
import Image from "next/image";
import logo from "../../../public/assets/pics/vid_logo.png";
const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={logo} width={40} height={40} alt="logo" />
        <Title>PabloTube</Title>
      </Wrapper>
    </Container>
  );
};

export default Header;
