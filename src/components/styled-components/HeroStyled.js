import styled from "styled-components";
import { motion } from "framer-motion";
export const HeroStyled = styled.main`
  display: flex;
  min-height: 100vh;
  min-width: 100%;
  padding: 1rem;
  justify-content: center;

  .isActive {
    justify-content: space-evenly;
  }
`;
export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Picture = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  height: auto;
  object-fit: contain;
  min-width: 280px;
  border: 1px solid #fff;
`;

export const Card = styled.div`
  text-align: left;
  border: 1px solid #fff;
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 400px;
  min-width: 280px;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  color: #fff;
  line-height: 2rem;
  font-size: 2rem;
  font-weight: 300;

  strong {
    transform: scale(1.1);
  }
`;
