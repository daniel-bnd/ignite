import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { CheckoutContextProvider } from "./contexts/CheckoutContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CheckoutContextProvider>
          <Router />
        </CheckoutContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
