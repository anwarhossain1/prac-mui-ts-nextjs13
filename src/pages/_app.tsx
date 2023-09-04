
import { CacheProvider } from '@emotion/react';

import { createEmotionCache } from '../utils/create-emotion-cache';
import { Provider as ReduxProvider } from 'react-redux';
import { store, useSelector } from "../redux/store/store";
import AppComponents from '../components/AppComponents';
const clientSideEmotionCache = createEmotionCache();
const  MyApp = (props : any) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const getLayout = Component.getLayout ?? ((page: any) => page);
  return (
    <CacheProvider value={emotionCache}>
       <ReduxProvider store={store}>
       <AppComponents getLayout={getLayout} Component={Component} pageProps={pageProps} />
       </ReduxProvider>
        </CacheProvider>    
  );
}

export default MyApp;
