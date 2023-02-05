import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

import DefaultAppLayout from "@/layouts/DefaultAppLayout";
import theme from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultAppLayout>
        <Component {...pageProps} />
      </DefaultAppLayout>
    </ThemeProvider>
  );
}
