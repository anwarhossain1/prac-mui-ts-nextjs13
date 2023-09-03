import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from '@emotion/react';
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
        responsiveFontSizes:true,
        mode: "light",
      })}
    >
        {getLayout(<Component {...pageProps} />)}
         </ThemeProvider>
        </CacheProvider>    
  );
}

export default MyApp;
