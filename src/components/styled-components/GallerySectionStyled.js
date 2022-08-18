import styled from "styled-components";

export const GallerySection = styled.section`
  min-width: 100%;
  padding: 1.5rem;
  gap: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 600px));
  grid-template-rows: auto;
  justify-content: center;
  z-index: 3;
`;

export const GalleryContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 0 1rem;
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem 0;
`;
export const SwitchButton = styled.button`
  display: block;
  background: none;
  border: none;
  font-size: min(2vw, 1rem);
  font-weight: 600;
  letter-spacing: 0.25rem;
  padding: 0.5rem 0;

  color: #fff;
`;

export const ImageCard = styled.div`
  -webkit-box-shadow: 0px 0px 20px -5px rgba(88, 22, 113, 1);
  -moz-box-shadow: 0px 0px 20px -5px rgba(88, 22, 113, 1);
  box-shadow: 0px 0px 20px -5px rgba(88, 22, 113, 1);

  max-height: calc(50vh - 3rem);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
