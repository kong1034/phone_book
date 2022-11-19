import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../pages/Layout/Header';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
