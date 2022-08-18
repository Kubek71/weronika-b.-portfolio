import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
}

body, html {
    min-height: 100%;
    min-width: 100%;
    margin: 0;
    padding: 0;
    
}

body {
    background: linear-gradient(to bottom, #c31432, #240b36);
    font-family: 'Saira Condensed', sans-serif; 
    position: relative;
}
.App {
    width: 100%;
    height: 100%;
    display: flex;
}
.page-content {
        width: 100%;
        height: 100%;
        padding: 1.5rem;
        
    }

`;
