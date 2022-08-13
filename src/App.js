import { GlobalStyles } from "./components/styled-components/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import Hero from "./components/Hero";
import { useEffect, useRef } from "react";

const App = () => {
  const heroRef = useRef(null);
  const [renderPage, setRenderPage] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRenderPage(true);
    }, 4000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Header setRenderPage={setRenderPage} />
        {renderPage === true && <Hero forwardedRef={heroRef} />}
      </div>
    </>
  );
};

export default App;
