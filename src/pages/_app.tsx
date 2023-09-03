import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from '@emotion/react';
import type { AppProps } from "next/app";
import { createTheme } from "../theme";
import { createEmotionCache } from '../utils/create-emotion-cache';
const clientSideEmotionCache = createEmotionCache();
const  MyApp = (props : any) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <CacheProvider value={emotionCache}>
        <ThemeProvider
      theme={createTheme({
        direction: "ltr",
        //   responsiveFontSizes: settings.responsiveFontSizes,
        mode: "light",
      })}
    >
        {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
        </CacheProvider>    
  );
}

export default MyApp;
