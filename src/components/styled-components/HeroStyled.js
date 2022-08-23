import styled from "styled-components";
import { motion } from "framer-motion";
export const HeroStyled = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  /* display: none; */
  z-index: 2;
  padding-bottom: calc(10vh - 5vw);
  .isActive {
    justify-content: flex-start;
  }
`;
export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 100%;
  max-width: 1800px;
  border: 1px solid #fff;
  font-size: 10px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 0;
    font-size: 16px;
  }
`;
export const Picture = styled.img`
  /* width: clamp(260px, 400px, 100%); */
  max-height: 600px;
  width: 100%;
  overflow: hidden;
  height: auto;
  object-fit: contain;
  border: 1px solid #fff;
  justify-self: center;
  border-top: none;
  border-left: none;
  @media (max-width: 768px) {
    border-right: none;
  }
`;

export const Card = styled.div`
  text-align: left;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  grid-column: 2/4;
`;

export const Text = styled.span`
  color: #fff;
  line-height: 1.2em;
  font-size: 1.6em;
  font-weight: 300;
  max-height: 100%;
  padding: 1.5rem;

  strong {
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 1.5rem 2.5rem;
  border: 1px solid #fff;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.25rem;
  background: none;
  color: #fff;
  text-transform: uppercase;
  justify-self: center;
  cursor: pointer;

  border-bottom: none;
  border-left: none;

  @media (max-width: 768px) {
    border-right: none;
  }
`;
