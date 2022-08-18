import React from "react";
import {
  GallerySection,
  GalleryContainer,
  ImageCard,
  ButtonsBox,
  SwitchButton,
} from "./styled-components/GallerySectionStyled";
import { digitalArray, postersArray } from "../helpers/ImgArrays";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Gallery = () => {
  const [chooseAlbumOnClick, setChooseAlbumOnClick] = useState(digitalArray);

  const switchButtonsBoxShadow = {
    borderBottom: "3px solid #fff",
    boxShadow: "0px 8px 3px -5px rgba(234, 32, 243, 1)",
  };

  useEffect(() => {
    console.log(chooseAlbumOnClick);
  }, [chooseAlbumOnClick]);

  return (
    <GalleryContainer>
      <ButtonsBox>
        <AnimatePresence>
          <SwitchButton
            as={motion.button}
            animate={
              chooseAlbumOnClick === digitalArray ? switchButtonsBoxShadow : {}
            }
            exit={{ opacity: 0 }}
            transition={{ delay: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setChooseAlbumOnClick(digitalArray)}
          >
            Digital
          </SwitchButton>
          <SwitchButton
            as={motion.button}
            animate={
              chooseAlbumOnClick === postersArray ? switchButtonsBoxShadow : {}
            }
            whileHover={{ scale: 1.1 }}
            onClick={() => setChooseAlbumOnClick(postersArray)}
          >
            Plakaty
          </SwitchButton>
          <SwitchButton>Digital</SwitchButton>
        </AnimatePresence>
      </ButtonsBox>
      <AnimatePresence>
        <GallerySection
          as={motion.section}
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          key={Math.random() * 1000}
        >
          {chooseAlbumOnClick.map((imgSrc, i) => {
            return (
              <ImageCard>
                <img src={`./assets/digital/${imgSrc}`} alt="#"></img>
              </ImageCard>
            );
          })}
        </GallerySection>
      </AnimatePresence>
    </GalleryContainer>
  );
};

export default Gallery;
