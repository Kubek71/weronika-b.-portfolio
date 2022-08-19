import React from "react";
import { HeaderStyled, Heading } from "./styled-components/HeaderStyled";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";

const Header = ({ renderHeroPage, setRenderHeroPage }) => {
  useEffect(() => {
    setTimeout(() => {
      setRenderHeroPage(true);
    }, 4000);
  }, []);
  return (
    <HeaderStyled id="15">
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
