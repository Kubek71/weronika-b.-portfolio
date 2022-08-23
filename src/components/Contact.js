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
import emailjs from "@emailjs/browser";
import contactIcon from "../images/contactsvg.svg";

const Contact = () => {
  const contactForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lmbt6ur",
        "template_802sfwh",
        contactForm.current,
        "TS8vL0GR8h3WXF6oS"
      )
      .then(
        (result) => {
          e.target.reset();
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactStyled>
      <ContactForm
        as={motion.form}
        initial={{ y: "-5vw", scale: 0.5 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ duration: 0.5, y: { delay: 0.5 } }}
        ref={contactForm}
        onSubmit={sendEmail}
      >
        <FormHeading>Napisz do mnie!</FormHeading>
        <Textfield
          type="text"
          name="from_name"
          placeholder="Imie"
          required
        ></Textfield>
        <Textfield
          type="text"
          name="from_lastName"
          placeholder="Nazwisko"
          required
        ></Textfield>
        <Textfield
          type="email"
          name="from_email"
          placeholder="Email"
          required
        ></Textfield>
        <Textarea
          as={motion.textarea}
          initial={{ backgroundSize: "300%" }}
          animate={{
            backgroundPosition: ["0%", "25%", "50%", "75% ", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: 2,
            default: { ease: "linear" },
          }}
          name="message"
          placeholder="Wiadomość"
          className="message-input"
          required
        ></Textarea>
        <SubmitButton
          as={motion.button}
          initial={{ width: "45%" }}
          animate={{ width: "50%" }}
          transition={{ duration: 0.5 }}
        >
          Wyślij!
        </SubmitButton>
      </ContactForm>
    </ContactStyled>
  );
};

export default Contact;
