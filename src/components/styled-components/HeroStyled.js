import styled from "styled-components";
import { motion } from "framer-motion";
export const HeroStyled = styled.main`
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  justify-content: center;
  /* display: none; */
  z-index: 2;
  .isActive {
    justify-content: space-evenly;
  }
`;
export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 100%;

  @media (min-width: 568px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const Picture = styled.img`
  width: clamp(260px, 400px, 100%);
  overflow: hidden;
  height: auto;
  object-fit: contain;
  border: 1px solid #fff;
  justify-self: center;
`;

export const Card = styled.div`
  text-align: left;
  border: 1px solid #fff;
  width: clamp(200px, 100%, 800px);
  min-height: 260px;
  aspect-ratio: 2/1;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  grid-column: 2/4;
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

export const Button = styled.button`
  display: block;
  width: clamp(260px, 400px, 100%);
  padding: 1.5rem 2.5rem;
  border: 1px solid #fff;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.25rem;
  background: none;
  color: #fff;
  text-transform: uppercase;
  transition: background 2s;
  justify-self: center;

  &:hover {
    background: linear-gradient(
      289deg,
      rgba(134, 16, 51, 1) 0%,
      rgba(199, 98, 141, 0) 85%
    );
  }
`;
