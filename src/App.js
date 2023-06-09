import { GlobalStyles } from "./components/styled-components/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";

const App = () => {
  const heroRef = useRef(null);
  const [renderContactPage, setRenderContactPage] = useState(false);
  const [renderHeroPage, setRenderHeroPage] = useState(false);
  const [showPictures, setShowPictures] = useState(false);

  return (
    <>
      <GlobalStyles />
      {renderContactPage === true ? (
        <Contact setRenderContactPage={setRenderContactPage} />
      ) : (
        <div className="page-content">
          <Header
            renderHeroPage={renderHeroPage}
            setRenderHeroPage={setRenderHeroPage}
          />
          {renderHeroPage === true && (
            <Hero
              forwardedRef={heroRef}
              showPictures={showPictures}
              setShowPictures={setShowPictures}
            />
          )}
          {showPictures === true && <Gallery />}
        </div>
      )}
      <Footer setRenderContactPage={setRenderContactPage} />
    </>
  );
};

export default App;
