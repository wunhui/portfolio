
import '@/styles/scss/index.scss'
import Head from 'next/head';  
import { prefix } from '@/config/config'
import { PortFolioProvider } from '@/context/context'
import { I18nextProvider } from 'react-i18next'
import i18n from "@/locales/i18n"

export default function App({ Component, pageProps }) { 
  
  return (  
    <>
    <PortFolioProvider value={{ prefix }}>
      <I18nextProvider i18n={i18n}>
        <Head>
          <title>Unghui</title>
          <meta name="description" content="MyPortFolio" />
          <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" />
          <link rel="icon" type="image/png" href="favicon.ico"></link>
        </Head>
        <Component {...pageProps} />
      </I18nextProvider>
    </PortFolioProvider>
    </>   
  )
}
