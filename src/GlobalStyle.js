import { createGlobalStyle } from "styled-components";
import background from "../src/background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing:inherit;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.color.gallery};
  }

  #root {
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url("${background}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: white;
  }
 `;