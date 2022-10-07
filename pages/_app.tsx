import { CssVarsProvider, getInitColorSchemeScript } from "@mui/joy/styles";
import type { AppProps } from "next/app";
import AppbarLayout from "../common/uiLayout/appbar/AppbarLayout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CssVarsProvider disableTransitionOnChange>
      {/* To prevent the UI of flickering */}
      {getInitColorSchemeScript()}
      <AppbarLayout />
      <Component {...pageProps} />
    </CssVarsProvider>
  );
};

export default MyApp;
