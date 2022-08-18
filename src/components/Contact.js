import React from "react";
import {
  ContactStyled,
  ContactForm,
  Textfield,
  SubmitButton,
  FormHeading,
  Textarea,
} from "./styled-components/ContactStyled";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import contactIcon from "../images/contactsvg.svg";

const Contact = () => {
  return (
    <ContactStyled>
      <ContactForm>
        <FormHeading>Napisz do mnie!</FormHeading>
        <Textfield type="text" placeholder="email"></Textfield>
        <Textarea placeholder="wiadomość" className="message-input"></Textarea>
        <SubmitButton>Wyślij!</SubmitButton>
      </ContactForm>
    </ContactStyled>
  );
};

export default Contact;
