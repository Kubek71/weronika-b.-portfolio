import React from "react";
import { HeaderStyled, Heading } from "./styled-components/HeaderStyled";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";

const Header = ({ setRenderHeroPage }) => {
  useEffect(() => {
    setTimeout(() => {
      setRenderHeroPage(true);
    }, 4000);
  }, []);
  return (
    <HeaderStyled>
      <Heading>
        <Typewriter
          options={{
            strings: "Weronika Bruździńska",
            autoStart: true,
            loop: false,
          }}
        />
      </Heading>
    </HeaderStyled>
  );
};

export default Header;
