import "@/styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { Box, styled, ThemeProvider } from "@mui/material";

import theme from "@/theme";

const AppPageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
}));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AppPageContainer>
        <Component {...pageProps} />
      </AppPageContainer>
    </ThemeProvider>
  );
}
