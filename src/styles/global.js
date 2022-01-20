import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  :root {
    --branco: rgba(255, 255, 255, 1);
    --cinza: rgba(162, 162, 162, 1);
    --laranja: rgba(250, 152, 47, 1);
    --preto: rgba(60, 60, 60, 1);
    --vermelho: rgba(245, 74, 72, 1);

    --light: 300;
    --normal: 400;
    --medium: 500;
    --bold: 700;
    
    --font-family: 'Poppins', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: var(--font-family);
    font-size: 16px;
  }
`

export default GlobalStyles
