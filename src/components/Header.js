import React from "react";
import { HeaderStyled, Heading } from "./styled-components/HeaderStyled";
import Typewriter from "typewriter-effect";

const Header = () => {
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
