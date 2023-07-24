import { useState } from "react";
import useMedia from "use-media";
import { userData } from "@/utils/userData";
import { useNavigate, useLocation } from 'react-router-dom';

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
} from "./style";

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "@/styles/Buttons";
import { Container, Flex } from "@/styles/Global";

export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}

export const NavBar = (): JSX.Element => {

  const isWide = useMedia({ maxWidth: "991px" });

  document.title = userData.nameUser;

  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoText>{userData.nameUser}</LogoTipoText>
          </LogoTipo>
          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        <Flex>
          {isWide ? open && <NavLinks /> : <NavLinks />}
        </Flex>
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleStartClick = () => {
    if (location.pathname === "/about") {
      navigate("/");
      window.scrollTo(0, 0); 
    } else {
      window.location.hash = "#home";
    }
  };

  const handleAboutClick = () => {
    navigate("/about");
    window.scrollTo(0, 0);
  };


  const isHome = location.pathname === '/';

  return (
    <NavbarLinks>
      <Button type="btLink" as="a" color="grey4" onClick={handleStartClick}>
        Inicio
      </Button>
      {isHome && (
      <>
        <Button type="btLink" as="a" color="grey4" href={`#projects`}>
        Projetos
        </Button>
        <Button type="btLink" as="a" color="grey4" href={`#contact`}>
          Contato
        </Button>
      </>)}
      <Button type="btLink" as="a" color="grey4" href={`#social-media`}>
          Mídia Social
      </Button>
      <Button type="btLink" as="a" color="grey4" onClick={handleAboutClick}>
        Sobre mim
      </Button>      
    </NavbarLinks>
  );
};
