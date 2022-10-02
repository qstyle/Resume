import type { AppProps } from 'next/app'
import { extendTheme } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'


const theme = extendTheme()

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={styles} >
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  )
}

export default MyApp
