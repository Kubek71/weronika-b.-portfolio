import styled from "styled-components";
export const ContactStyled = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(134, 16, 51, 0) 0%,
    rgba(66, 15, 37, 1) 85%
  );

  button {
    cursor: pointer;
  }
`;

export const ContactForm = styled.form`
  text-align: left;
  border: 1px solid #fff;
  width: 80%;
  max-width: 800px;
  min-height: 100%;
  padding: 1rem;
  display: grid;
  grid-template-rows: 1fr 1fr 2fr 0.5fr;
  align-items: center;
  justify-items: center;
  grid-gap: 1rem;
`;

export const FormHeading = styled.h2`
  font-size: max(1rem, 1.25vw);
  letter-spacing: 0.25rem;
  color: fff;
  margin: 0;
  font-weight: 300;
  color: #fff;
  text-transform: uppercase;
  display: block;
  margin: 0 auto;
  text-align: center;
`;

export const Textfield = styled.input`
  display: block;
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid #fff;
  padding: 0.5rem 1rem;
  margin: 2rem auto;
  color: #fff;

  &::placeholder {
    color: #fff;
    opacity: 0.75;
  }
`;

export const Textarea = styled.textarea`
  min-height: 100%;
  width: 100%;
  background: none;
  border: 1px solid #fff;
  padding: 0.5rem 1rem;
  color: #fff;
  font-size: 1rem;
  background: rgb(235, 183, 198);
  background: linear-gradient(
    326deg,
    rgba(235, 183, 198, 0.025) 0%,
    rgba(167, 40, 95, 0.6) 84%
  );
  &::placeholder {
    color: #fff;
    opacity: 0.75;
  }
`;
export const SubmitButton = styled.button`
  width: 50%;
  display: block;
  padding: 0.5rem 1rem;
  background: rgb(235, 183, 198);
  background: linear-gradient(
    90deg,
    rgba(235, 183, 198, 0.025) 0%,
    rgba(167, 40, 95, 0.6) 84%
  );

  color: #fff;
  border: 1px solid #fff;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  text-align: center;
  font-weight: 600;
`;
