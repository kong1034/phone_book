import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../Layout/Header'

export default function App({ Component, pageProps }: AppProps) {
  return<> 
    <Component {...pageProps} />
  </>
}
