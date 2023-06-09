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
import {
  digitalArray,
  postersArray,
  drawingsArray,
  graphicsArray,
} from "../helpers/ImgArrays";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Gallery = () => {
  const GalleryContainerRef = useRef(null);
  const [chooseAlbumOnClick, setChooseAlbumOnClick] = useState(drawingsArray);
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

  useEffect(() => {
    popupImgSrc !== null
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [popupImgSrc]);

  return (
    <>
      <GalleryContainer ref={GalleryContainerRef}>
        <ButtonsBox>
          <SwitchButton
            as={motion.button}
            animate={
              chooseAlbumOnClick === drawingsArray ? switchButtonsBoxShadow : {}
            }
            transition={{ delay: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setChooseAlbumOnClick(drawingsArray)}
          >
            Rysunek
          </SwitchButton>
          <SwitchButton
            as={motion.button}
            animate={
              chooseAlbumOnClick === digitalArray ? switchButtonsBoxShadow : {}
            }
            whileHover={{ scale: 1.1 }}
            onClick={() => setChooseAlbumOnClick(digitalArray)}
          >
            Ilustracja
          </SwitchButton>
          <SwitchButton
            as={motion.button}
            animate={
              chooseAlbumOnClick === graphicsArray ? switchButtonsBoxShadow : {}
            }
            whileHover={{ scale: 1.1 }}
            onClick={() => setChooseAlbumOnClick(graphicsArray)}
          >
            Projekty Graficzne
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
        </ButtonsBox>

        <GallerySection
          as={motion.section}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            default: {
              ease: "linear",
            },
          }}
          key={Math.random() * 10000}
        >
          {chooseAlbumOnClick.map((imgSrc, i) => {
            return (
              <ImageCard key={i} as={motion.div} whileHover={{ scale: 0.96 }}>
                <img
                  src={`./assets/pictures/${imgSrc}`}
                  alt="#"
                  onClick={(e) => {
                    setPopupImgSrc(e.target.src);
                  }}
                ></img>
              </ImageCard>
            );
          })}
        </GallerySection>
      </GalleryContainer>

      {popupImgSrc !== null && (
        <ImgPopup onClick={() => setPopupImgSrc(null)}>
          <PopupBox
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={popupImgSrc} alt="#" />
            <SvgButton onClick={() => setPopupImgSrc(null)} />
          </PopupBox>
        </ImgPopup>
      )}
    </>
  );
};

export default Gallery;
