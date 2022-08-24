import React from "react";
import {
  ContactStyled,
  ContactForm,
  Textfield,
  SubmitButton,
  FormHeading,
  Textarea,
  SuccesfullPopup,
} from "./styled-components/ContactStyled";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import contactIcon from "../images/contactsvg.svg";

const Contact = () => {
  const contactForm = useRef();
  const [succesfullPopup, setSuccesfullPopup] = useState(false);

  useEffect(() => {
    if (succesfullPopup === true) {
      setTimeout(() => setSuccesfullPopup((current) => !current), 3000);
    }
  }, [succesfullPopup]);

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
          setSuccesfullPopup(true);
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
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
        <FormHeading
          as={motion.h2}
          initial={{ backgroundSize: "300%" }}
          animate={{
            backgroundPosition: ["0%", "25%", "50%", "75% ", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: 2,
            default: { ease: "linear" },
          }}
        >
          Napisz do mnie!
        </FormHeading>
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
          initial={{ width: "25%" }}
          animate={{ width: "35%" }}
          transition={{ width: { duration: 0.5 } }}
          whileHover={{
            scale: 1.1,
            transition: { scale: { duration: 0.125 } },
          }}
        >
          Wyślij!
        </SubmitButton>
        {succesfullPopup === true && (
          <SuccesfullPopup
            as={motion.div}
            initial={{ y: "-1rem" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <strong>WIADOMOŚĆ WYSŁANA, DZIĘKUJĘ</strong>
          </SuccesfullPopup>
        )}
      </ContactForm>
    </ContactStyled>
  );
};

export default Contact;
