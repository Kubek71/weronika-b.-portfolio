import React from "react";
import {
  GallerySection,
  GalleryContainer,
  ImageCard,
  ButtonsBox,
  SwitchButton,
  ImgPopup,
  PopupBox,
  SvgButton,
} from "./styled-components/GallerySectionStyled";
import Svg from "../images/closePopupIcon.svg";
import { digitalArray, postersArray } from "../helpers/ImgArrays";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Gallery = () => {
  const GalleryContainerRef = useRef(null);
  const [chooseAlbumOnClick, setChooseAlbumOnClick] = useState(digitalArray);
  const [popupImgSrc, setPopupImgSrc] = useState(null);

  const switchButtonsBoxShadow = {
    borderBottom: "3px solid #fff",
    boxShadow: "0px 8px 3px -5px rgba(234, 32, 243, 1)",
  };

  const scrollIntoGallery = () => {
    if (GalleryContainerRef.current !== null) {
      GalleryContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  useEffect(() => {
    scrollIntoGallery();
  }, []);

  return (
    <>
      <GalleryContainer ref={GalleryContainerRef}>
        <ButtonsBox>
          <AnimatePresence>
            <SwitchButton
              as={motion.button}
              animate={
                chooseAlbumOnClick === digitalArray
                  ? switchButtonsBoxShadow
                  : {}
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
                chooseAlbumOnClick === postersArray
                  ? switchButtonsBoxShadow
                  : {}
              }
              whileHover={{ scale: 1.1 }}
              onClick={() => setChooseAlbumOnClick(postersArray)}
            >
              Plakaty
            </SwitchButton>
            <SwitchButton>Digital</SwitchButton>
          </AnimatePresence>
        </ButtonsBox>
        <AnimatePresence initial={false}>
          <GallerySection
            as={motion.section}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              default: {
                ease: "linear",
              },
            }}
            exit={{}}
            key={Math.random() * 1000}
          >
            {chooseAlbumOnClick.map((imgSrc, i) => {
              return (
                <ImageCard>
                  <img
                    src={`./assets/digital/${imgSrc}`}
                    alt="#"
                    onClick={(e) => setPopupImgSrc(e.target.src)}
                  ></img>
                </ImageCard>
              );
            })}
          </GallerySection>
        </AnimatePresence>
      </GalleryContainer>

      {popupImgSrc !== null && (
        <ImgPopup>
          <PopupBox
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img src={popupImgSrc} alt="#" onClick={(e) => console.log(e)} />
            <SvgButton
              onClick={() => {
                setPopupImgSrc(null);
              }}
            />
          </PopupBox>
        </ImgPopup>
      )}
    </>
  );
};

export default Gallery;
