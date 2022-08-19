import styled from "styled-components";
import closePopupIcon from "../../components/../images/closePopupIcon.svg";

export const GallerySection = styled.section`
  gap: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 600px));
  grid-template-rows: auto;
  justify-content: center;
`;

export const GalleryContainer = styled.div`
  min-height: 100vh;
  width: 100%;
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

  &:hover {
    transform: scale(0.95);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const ImgPopup = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  position: fixed;
  background: linear-gradient(to bottom, #c31432, #240b36);
  min-height: 100%;
  width: 100vw;
  top: 0;
  left: 0;
  /* backdrop-filter: blur(15px); */
  z-index: 1;
`;

export const PopupBox = styled.div`
  max-height: calc(50vh);
  padding: 0 5vw;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  svg {
    position: absolute;
    top: calc(-50px - 5vw);
    left: 5vw;
    cursor: pointer;
  }
`;

export const SvgButton = styled.div`
  background-image: url(${closePopupIcon});
  position: absolute;
  width: 50px;
  height: 50px;
  top: calc(-50px - 5vw);
  right: 5vw;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
