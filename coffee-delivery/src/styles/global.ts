import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.brand.purple};
  }

  body {
    background: ${props => props.theme.colors.base.background};
    color: ${props => props.theme.colors.base.text};
  }

  body, input, textarea, button {
    font: ${props => props.theme.fonts.regular.m}
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
  }

  input {
    border: none;
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button
   {
    -webkit-appearance: none;
    margin: 0;
   }

   input[type="number"] {
    -moz-appearance: textfield;
   }
`;
