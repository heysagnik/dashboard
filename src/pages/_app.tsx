
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { theme as baseTheme } from '@saas-ui/theme-glass'

export const theme = extendTheme(
  {
    // your overrides
  },
  baseTheme
)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
         <Component {...pageProps} />
    </ChakraProvider>
  )
}
