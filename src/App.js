import { GlobalStyles } from "./components/styled-components/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Gallery from "./components/Gallery";
import { useEffect, useRef } from "react";

const App = () => {
  const heroRef = useRef(null);
  const [renderPage, setRenderPage] = useState(false);
  const [mobileContactForm, setMobileContactForm] = useState(false);
  const [showPictures, setShowPictures] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRenderPage(true);
    }, 4000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Sidebar
          setMobileContactForm={setMobileContactForm}
          mobileContactForm={mobileContactForm}
        />
        {mobileContactForm === false && (
          <div className="page-content">
            <Header setRenderPage={setRenderPage} />
            {renderPage === true && (
              <Hero
                forwardedRef={heroRef}
                showPictures={showPictures}
                setShowPictures={setShowPictures}
              />
            )}
            {showPictures === true && <Gallery />}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
