
import { CacheProvider } from '@emotion/react';
import { PersistGate } from 'redux-persist/integration/react'
import { createEmotionCache } from '../utils/create-emotion-cache';
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store, useSelector } from "../redux/store/store";
import AppComponents from '../components/AppComponents';
const clientSideEmotionCache = createEmotionCache();
const  MyApp = (props : any) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const getLayout = Component.getLayout ?? ((page: any) => page);
  return (
    <CacheProvider value={emotionCache}>
       <ReduxProvider store={store}>
       <PersistGate loading={null} persistor={persistor}>
       <AppComponents getLayout={getLayout} Component={Component} pageProps={pageProps} />
        </PersistGate>
       </ReduxProvider>
        </CacheProvider>    
  );
}

export default MyApp;
