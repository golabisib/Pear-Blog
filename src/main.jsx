import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { ThemeProvider } from "@mui/material";
import theme from "./MUI/theme.js";
import App from "./App.jsx";

import "./styles/index.css";
import "./styles/fonts.css";

const client = new ApolloClient({
  uri: "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clwx4cx40072707tetzuppwid/master",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
