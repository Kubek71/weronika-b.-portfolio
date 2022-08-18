import React from "react";
import { FooterStyled } from "./styled-components/FooterStyled";
import { motion } from "framer-motion";

const Footer = ({ setRenderContactPage }) => {
  return (
    <FooterStyled>
      <motion.svg
        className="large-svg"
        width="64px"
        height="64px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ scale: 1.1, rotate: 15 }}
        onClick={() => {
          setRenderContactPage((current) => !current);
        }}
      >
        <path
          fill="#fff"
          stroke="#B385F2"
          stroke-width="1"
          d="M1,2 L22,2 L22,18 L14,18 L6,22 L6,18 L1,18 L1,2 Z M6,10 L7,10 L7,11 L6,11 L6,10 Z M11,10 L12,10 L12,11 L11,11 L11,10 Z M16,10 L17,10 L17,11 L16,11 L16,10 Z"
        />
      </motion.svg>
    </FooterStyled>
  );
};

export default Footer;
