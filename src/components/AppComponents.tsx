
import React from 'react'
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from '../redux/store/store';
import {createTheme} from '../theme'
const AppComponents = ({getLayout,Component,pageProps } : any) => {
    const { themeMode} = useSelector((state:any)=>state.themeMode)
    console.log(themeMode)
    const theme = createTheme({
        direction: 'ltr',
        responsiveFontSizes: true,
        mode: themeMode,
      });
  return (
      <ThemeProvider
        theme={theme}
    >
        {getLayout(<Component {...pageProps} />)}
         </ThemeProvider>
  )
}

export default AppComponents
