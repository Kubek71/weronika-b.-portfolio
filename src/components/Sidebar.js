import React from "react";
import {
  SidebarStyled,
  ContactForm,
  Textfield,
  SubmitButton,
  FormHeading,
  StickyContainer,
  Textarea,
} from "./styled-components/SidebarStyled";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import contactIcon from "../images/contactsvg.svg";

const Sidebar = ({ mobileContactForm, setMobileContactForm }) => {
  const sidebarWidthRef = useRef(null);
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [slide, setSlide] = useState(false);
  const [mobileSlide, setMobileSlide] = useState(false);

  useEffect(() => {
    if (sidebarWidthRef !== null) {
      setSidebarWidth(sidebarWidthRef.current.offsetWidth);
    }
    console.log(sidebarWidth);
  }, [sidebarWidth]);

  return (
    <SidebarStyled
      as={motion.div}
      animate={{
        width: slide === true ? "30vw" : "15vw",
      }}
      className={mobileSlide === true ? "absolute" : ""}
      ref={sidebarWidthRef}
    >
      <StickyContainer className="container">
        <motion.svg
          className="large-svg"
          width="128px"
          height="128px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ scale: 1.1, rotate: 15 }}
          onClick={() => {
            setSlide(!slide);
          }}
        >
          <path
            fill="none"
            stroke="#fff"
            stroke-width="1"
            d="M1,2 L22,2 L22,18 L14,18 L6,22 L6,18 L1,18 L1,2 Z M6,10 L7,10 L7,11 L6,11 L6,10 Z M11,10 L12,10 L12,11 L11,11 L11,10 Z M16,10 L17,10 L17,11 L16,11 L16,10 Z"
          />
        </motion.svg>
        <motion.svg
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            console.log("test");
            setMobileSlide(!mobileSlide);
            setMobileContactForm(!mobileContactForm);
          }}
          className="svg-mobile"
        >
          <path
            fill="rgba(158, 19, 91, 0.8)"
            stroke="#fff"
            stroke-width="1"
            d="M1,2 L22,2 L22,18 L14,18 L6,22 L6,18 L1,18 L1,2 Z M6,10 L7,10 L7,11 L6,11 L6,10 Z M11,10 L12,10 L12,11 L11,11 L11,10 Z M16,10 L17,10 L17,11 L16,11 L16,10 Z"
          />
        </motion.svg>

        <ContactForm
          as={motion.form}
          animate={
            mobileSlide === false
              ? {
                  opacity: slide === true ? 1 : 0,
                }
              : { opacity: 1 }
          }
          initial={mobileSlide === false ? { opacity: 0 } : { opacity: 1 }}
        >
          <FormHeading>Napisz do mnie!</FormHeading>
          <Textfield type="text" placeholder="email"></Textfield>
          <Textarea
            placeholder="wiadomość"
            className="message-input"
          ></Textarea>
          <SubmitButton>Wyślij!</SubmitButton>
        </ContactForm>
      </StickyContainer>
    </SidebarStyled>
  );
};

export default Sidebar;
