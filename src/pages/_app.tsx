
import type { AppProps } from 'next/app'
import { SaasProvider,theme as baseTheme } from '@saas-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { initializeApp,getApp,getApps } from 'firebase/app';
import {theme} from '@saas-ui/theme-glass'
import {
  initializeAuth,
  indexedDBLocalPersistence,
  connectAuthEmulator,
  inMemoryPersistence,
  getAuth,
} from 'firebase/auth';
import {
  FirebaseAppProvider,
  AuthProvider
} from 'reactfire';

import { useRouter } from 'next/router';
import configuration from 'configuration';
import { isBrowser } from "utils/generic/isBrowser";
import {NProgressNextRouter} from '@saas-ui/react'
import ClientOnly  from 'utils/generic/ClientOnly';



const t = extendTheme(theme,baseTheme)

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const app = getApps().length === 0 ? initializeApp(configuration.firebase) : getApp();
  const persistence = isBrowser()
  ? indexedDBLocalPersistence
  : inMemoryPersistence;
  const auth = initializeAuth(app, {
    persistence,
  });

  return (
    <ClientOnly>
    <FirebaseAppProvider firebaseConfig={configuration.firebase}>
    <AuthProvider sdk={auth}>
      <ChakraProvider theme={t}>
      <SaasProvider theme={t}>
              <NProgressNextRouter router={router} isAnimating />
              <Component {...pageProps} />
          
      </SaasProvider>
      </ChakraProvider>
    </AuthProvider>
    </FirebaseAppProvider>
    </ClientOnly>
  )
}
