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
}
.App {
    width: 100vw;
    height: 100%;
    display: flex;


    .page-content {
        width: 100%;
        height: 100%;
    }

    .absolute {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #240b36;
        z-index: 1;
        min-height: 100%;
        min-width: 100%;

        .container{
            position: unset;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 128px;
            padding-bottom: 64px;
        }


    }
    
}

`;
