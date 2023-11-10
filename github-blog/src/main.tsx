import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "post/:postId",
    element: <Post />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
