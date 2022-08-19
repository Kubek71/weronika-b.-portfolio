import React from "react";
import profile from "../images/profile.jpg";
import { animate, motion } from "framer-motion";
import { useTransform, useMotionValue } from "framer-motion";
import {
  HeroStyled,
  AboutContainer,
  Picture,
  Card,
  Text,
  Button,
} from "./styled-components/HeroStyled";
import { useEffect, useState } from "react";

const Hero = ({ forwardedRef, showPictures, setShowPictures }) => {
  useEffect(() => {
    if (forwardedRef.current !== null) {
      forwardedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      forwardedRef.current = null;
    }
  }, []);
  const x = useMotionValue(0);
  const fade = useTransform(x, [0, 100], ["#f00", "#00f"]);
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
        <Button
          as={motion.button}
          style={{ fade }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setShowPictures(!showPictures)}
        >
          Moje Prace
        </Button>
      </AboutContainer>
    </HeroStyled>
  );
};

export default Hero;
