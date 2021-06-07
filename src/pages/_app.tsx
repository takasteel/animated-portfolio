import { AppProps } from 'next/app'
import { MobileProvider } from '../hooks/useMobile'

import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MobileProvider>
      <Component {...pageProps} />
    </MobileProvider>
  )
}

export default MyApp
