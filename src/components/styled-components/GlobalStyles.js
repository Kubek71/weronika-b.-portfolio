import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
}

body, html {
    min-height: 100%;
    margin: 0;
    padding: 0;
}

body {
    background: linear-gradient(to bottom, #c31432, #240b36);
    font-family: 'Saira Condensed', sans-serif; 
}

`;
