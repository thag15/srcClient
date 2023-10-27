import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Theme from "./theme.js";
import { HelmetProvider } from "react-helmet-async";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <CssVarsProvider theme={Theme}>
          <CssBaseline />
          <App />
        </CssVarsProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
