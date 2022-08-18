import styled from "styled-components";

export const HeaderStyled = styled.header`
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: max(2rem, 4vw);
  letter-spacing: 0.5rem;
  color: black;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  max-width: 100%;
  display: block;

  div {
    padding: 1.5rem;
    width: 100%;
  }
`;
