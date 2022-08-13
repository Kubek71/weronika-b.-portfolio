import React from "react";
import profile from "../images/profile.jpg";
import { animate, motion } from "framer-motion";
import {
  HeroStyled,
  AboutContainer,
  Picture,
  Card,
  Text,
} from "./styled-components/HeroStyled";
import { useEffect, useState } from "react";

const Hero = ({ forwardedRef }) => {
  useEffect(() => {
    if (forwardedRef.current !== null) {
      forwardedRef.current.scrollIntoView({ behavior: "smooth" });
      console.log(forwardedRef.current);
    }
  }, []);
  return (
    <HeroStyled ref={forwardedRef}>
      <AboutContainer
        as={motion.section}
        animate={{ opacity: [0, 0.25, 0.5, 0.75, 1] }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Picture src={profile} />
        <Card>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </Text>
        </Card>
      </AboutContainer>
    </HeroStyled>
  );
};

export default Hero;
