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
            Jestem studentką Sztuki Nowych Mediów w polsko-japońskiej Akademii
            Technik Komputerowych w Gdańsku. Uwielbiam tworzyć ilustracje
            tradycyjnymi metodami, ale także grafiką cyfrową. Zajmuje się
            również obróbką zdjęć. Interesuje się fotografią, animacją,
            kaligrafią oraz projektowaniem designów na produkty.{" "}
          </Text>
        </Card>
        <Button
          as={motion.button}
          whileHover={{
            background: `linear-gradient(
            289deg,
            rgba(134, 16, 51, 1) 0%,
            rgba(199, 98, 141, 0) 85%
          )`,
            backgroundSize: "150%",
            backgroundPosition: ["0%", "25%", "50%", "75% ", "100%"],
          }}
          transition={{
            backgroundPosition: { duration: 0.25 },
          }}
          onClick={() => setShowPictures(!showPictures)}
        >
          Moje Prace
        </Button>
      </AboutContainer>
    </HeroStyled>
  );
};

export default Hero;
