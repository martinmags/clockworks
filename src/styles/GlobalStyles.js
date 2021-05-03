import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /** Typography Specs */
  html {
    font-size: 18px;
    font-family: 'Noto Sans JP', sans-serif;  
  }
  h1, h2, h3, h4, h5, h6, p {
    font-weight: 300;
  }

  /** Reset */
  *{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
